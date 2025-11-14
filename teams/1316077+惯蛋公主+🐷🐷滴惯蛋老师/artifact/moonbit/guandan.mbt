// MoonBit 惯蛋核心逻辑草案
//
// 该模块负责：
// 1. 生成两副牌（含大小王），并根据随机种子洗牌
// 2. 发牌给四个座位，每人 27 张
// 3. 根据上一手的出牌，判断合法性并给出推荐应对

module guandan.engine

import std::mem
import std::math

pub enum Suit {
  Spade,
  Heart,
  Club,
  Diamond,
  Joker
}

pub enum Rank {
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  RJ,
  RQ,
  RK,
  RA,
  R2,
  JokerSmall,
  JokerBig
}

pub struct Card {
  suit: Suit,
  rank: Rank
}

pub struct Deal {
  pub bottom: Hand,
  pub top: Hand,
  pub left: Hand,
  pub right: Hand
}

pub struct Hand {
  pub cards: Array<Card>
}

pub enum CombinationKind {
  Single,
  Pair,
  Trio,
  TrioWithSingle,
  TrioWithPair,
  Straight,
  StraightPairs,
  Plane,
  PlaneWithWings,
  Bomb,
  JokerBomb
}

pub struct Combination {
  pub kind: CombinationKind,
  pub weight: i32,
  pub cards: Array<Card>
}

pub struct PlayDecision {
  pub chosen: Option<Combination>,
  pub reason: String
}

const FULL_DECK_COUNT: i32 = 108
const HAND_SIZE: i32 = 27

pub fn generate_deck() -> Array<Card> {
  let mut deck = Array<Card>::new()
  deck.reserve(FULL_DECK_COUNT)

  let suits = [
    Suit::Spade,
    Suit::Heart,
    Suit::Club,
    Suit::Diamond
  ]

  let ranks = [
    Rank::R3,
    Rank::R4,
    Rank::R5,
    Rank::R6,
    Rank::R7,
    Rank::R8,
    Rank::R9,
    Rank::R10,
    Rank::RJ,
    Rank::RQ,
    Rank::RK,
    Rank::RA,
    Rank::R2
  ]

  for _ in 0..2 {
    for suit in suits {
      for rank in ranks {
        deck.push(Card { suit, rank })
      }
    }
    deck.push(Card { suit: Suit::Joker, rank: Rank::JokerSmall })
    deck.push(Card { suit: Suit::Joker, rank: Rank::JokerBig })
  }

  deck
}

pub fn shuffle(deck: &mut Array<Card>, seed: u64) {
  var state = seed | 1
  let mut i = deck.len() - 1
  while i > 0 {
    state = state ^ (state << 13)
    state = state ^ (state >> 7)
    state = state ^ (state << 17)
    let j = (state % (i + 1) as u64) as usize
    deck.swap(i, j)
    i -= 1
  }
}

pub fn deal(seed: u64) -> Deal {
  let mut deck = generate_deck()
  shuffle(&mut deck, seed)

  let mut bottom = Array<Card>::new()
  let mut top = Array<Card>::new()
  let mut left = Array<Card>::new()
  let mut right = Array<Card>::new()

  for i in 0..deck.len() {
    let card = deck[i]
    match i % 4 {
      0 => bottom.push(card),
      1 => right.push(card),
      2 => top.push(card),
      _ => left.push(card)
    }
  }

  Deal {
    bottom: Hand { cards: sort_hand(bottom) },
    top: Hand { cards: sort_hand(top) },
    left: Hand { cards: sort_hand(left) },
    right: Hand { cards: sort_hand(right) }
  }
}

fn sort_hand(mut cards: Array<Card>) -> Array<Card> {
  cards.sort_by(|a, b| compare_card(a, b))
  cards
}

fn compare_card(a: &Card, b: &Card) -> i32 {
  let rank_weight_a = rank_weight(a.rank)
  let rank_weight_b = rank_weight(b.rank)
  if rank_weight_a != rank_weight_b {
    return rank_weight_a - rank_weight_b
  }
  (a.suit as i32) - (b.suit as i32)
}

fn rank_weight(rank: Rank) -> i32 {
  match rank {
    Rank::R3 => 0,
    Rank::R4 => 1,
    Rank::R5 => 2,
    Rank::R6 => 3,
    Rank::R7 => 4,
    Rank::R8 => 5,
    Rank::R9 => 6,
    Rank::R10 => 7,
    Rank::RJ => 8,
    Rank::RQ => 9,
    Rank::RK => 10,
    Rank::RA => 11,
    Rank::R2 => 12,
    Rank::JokerSmall => 13,
    Rank::JokerBig => 14
  }
}

pub fn analyse_combination(cards: &Array<Card>) -> Option<Combination> {
  if cards.len() == 0 {
    return None
  }

  let grouped = group_by_rank(cards)
  let max_group = grouped.max_by(|a, b| a.len() - b.len())
  let max_count = max_group.len()
  let base_rank = max_group[0].rank
  let base_weight = rank_weight(base_rank)

  if max_count == 4 && cards.len() == 4 {
    return Some(Combination {
      kind: CombinationKind::Bomb,
      weight: base_weight,
      cards: cards.clone()
    })
  }

  if is_joker_bomb(cards) {
    return Some(Combination {
      kind: CombinationKind::JokerBomb,
      weight: 999,
      cards: cards.clone()
    })
  }

  match cards.len() {
    1 => Some(Combination {
      kind: CombinationKind::Single,
      weight: base_weight,
      cards: cards.clone()
    }),
    2 if max_count == 2 => Some(Combination {
      kind: CombinationKind::Pair,
      weight: base_weight,
      cards: cards.clone()
    }),
    3 if max_count == 3 => Some(Combination {
      kind: CombinationKind::Trio,
      weight: base_weight,
      cards: cards.clone()
    }),
    4 if max_count == 3 => Some(Combination {
      kind: CombinationKind::TrioWithSingle,
      weight: base_weight,
      cards: cards.clone()
    }),
    5 if max_count == 3 && grouped.len() == 2 => Some(Combination {
      kind: CombinationKind::TrioWithPair,
      weight: base_weight,
      cards: cards.clone()
    }),
    _ => analyse_sequence(cards, grouped)
  }
}

fn analyse_sequence(cards: &Array<Card>, grouped: Array<Array<Card>>) -> Option<Combination> {
  if grouped.len() < 2 {
    return None
  }

  let mut ranks = Array<i32>::new()
  for group in grouped {
    ranks.push(rank_weight(group[0].rank))
  }
  ranks.sort()
  for idx in 1..ranks.len() {
    if ranks[idx] != ranks[idx - 1] + 1 {
      return None
    }
  }

  let width = grouped[0].len()
  match width {
    1 if ranks.len() >= 5 => Some(Combination {
      kind: CombinationKind::Straight,
      weight: ranks.last(),
      cards: cards.clone()
    }),
    2 if ranks.len() >= 3 => Some(Combination {
      kind: CombinationKind::StraightPairs,
      weight: ranks.last(),
      cards: cards.clone()
    }),
    3 => {
      if cards.len() == ranks.len() * 3 {
        Some(Combination {
          kind: CombinationKind::Plane,
          weight: ranks.last(),
          cards: cards.clone()
        })
      } else {
        Some(Combination {
          kind: CombinationKind::PlaneWithWings,
          weight: ranks.last(),
          cards: cards.clone()
        })
      }
    },
    _ => None
  }
}

fn group_by_rank(cards: &Array<Card>) -> Array<Array<Card>> {
  let mut buckets = Map<Rank, Array<Card>>::new()
  for card in cards {
    if !buckets.contains(card.rank) {
      buckets[card.rank] = Array<Card>::new()
    }
    buckets[card.rank].push(card.clone())
  }
  let mut out = Array<Array<Card>>::new()
  for (_, bucket) in buckets {
    out.push(bucket)
  }
  out
}

fn is_joker_bomb(cards: &Array<Card>) -> Bool {
  if cards.len() != 4 {
    return false
  }
  var small = false
  var big = false
  for card in cards {
    if card.rank == Rank::JokerSmall {
      small = true
    }
    if card.rank == Rank::JokerBig {
      big = true
    }
  }
  small && big
}

pub fn decide_play(current: &Hand, last: Option<&Combination>) -> PlayDecision {
  match last {
    None => {
      let opener = find_best_open(current)
      PlayDecision {
        chosen: opener,
        reason: String::from("首攻：优先出级牌或最小连对。")
      }
    },
    Some(target) => {
      let response = find_response(current, target)
      match response {
        Some(combo) => PlayDecision {
          chosen: Some(combo),
          reason: String::from("压制对手，保持主动权。")
        },
        None => PlayDecision {
          chosen: None,
          reason: String::from("弃权：无合适牌型或留牌。")
        }
      }
    }
  }
}

fn find_best_open(hand: &Hand) -> Option<Combination> {
  let singles = scan_by_size(hand, 1)
  if singles.len() > 0 {
    return Some(singles[0])
  }
  let pairs = scan_by_size(hand, 2)
  if pairs.len() > 0 {
    return Some(pairs[0])
  }
  let bombs = scan_bombs(hand)
  if bombs.len() > 0 {
    return Some(bombs[0])
  }
  None
}

fn find_response(hand: &Hand, target: &Combination) -> Option<Combination> {
  let mut candidates = scan_matching(hand, target.kind, target.cards.len())
  candidates.retain(|combo| combo.weight > target.weight)
  candidates.sort_by(|a, b| a.weight - b.weight)
  if candidates.len() > 0 {
    return Some(candidates[0])
  }

  let bombs = scan_bombs(hand)
  if bombs.len() > 0 {
    return Some(bombs[0])
  }
  None
}

fn scan_matching(hand: &Hand, kind: CombinationKind, length: usize) -> Array<Combination> {
  let mut out = Array<Combination>::new()
  for subset in iterate_subsets(&hand.cards, length) {
    match analyse_combination(&subset) {
      Some(combo) if combo.kind == kind => out.push(combo),
      _ => ()
    }
  }
  out
}

fn scan_by_size(hand: &Hand, size: usize) -> Array<Combination> {
  let mut out = Array<Combination>::new()
  for subset in iterate_subsets(&hand.cards, size) {
    match analyse_combination(&subset) {
      Some(combo) => out.push(combo),
      None => ()
    }
  }
  out.sort_by(|a, b| a.weight - b.weight)
  out
}

fn scan_bombs(hand: &Hand) -> Array<Combination> {
  let mut out = Array<Combination>::new()
  for size in [4, 8, 12] {
    for subset in iterate_subsets(&hand.cards, size) {
      match analyse_combination(&subset) {
        Some(combo) if combo.kind == CombinationKind::Bomb || combo.kind == CombinationKind::JokerBomb => out.push(combo),
        _ => ()
      }
    }
  }
  out.sort_by(|a, b| a.weight - b.weight)
  out
}

fn iterate_subsets(cards: &Array<Card>, length: usize) -> Iterator<Array<Card>> {
  // MoonBit 目前还没有稳定的组合迭代器，这里使用简单的回溯生成器。
  Generator::new(|mut yield| {
    let mut track = Array<Card>::new()
    fn dfs(
      cards: &Array<Card>,
      start: usize,
      length: usize,
      track: &mut Array<Card>,
      yield: &mut dyn FnMut(Array<Card>)
    ) {
      if track.len() == length {
        yield(track.clone())
        return
      }
      let mut idx = start
      while idx < cards.len() {
        track.push(cards[idx])
        dfs(cards, idx + 1, length, track, yield)
        track.pop()
        idx += 1
      }
    }
    dfs(cards, 0, length, &mut track, &mut yield)
  })
}

