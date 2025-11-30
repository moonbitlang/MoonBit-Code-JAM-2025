///|
pub(all) struct Card {
  mut symbol_index : Int
  flipped : Bool
  matched : Bool
}

///|
pub(all) struct Game {
  rows : Int
  cols : Int
  card_width : Int
  card_height : Int
  padding : Int
  mut cards : Array[Array[Card]]
  mut flipped_indices : Array[Int] // Store indices of flipped cards (max 2)
  mut matched_count : Int
  total_pairs : Int
  symbols_index : Array[Int]
  mut game_active : Bool
}

///|
let game : Game = Game::{
  rows: 4,
  cols: 4,
  card_width: 100,
  card_height: 100,
  padding: 10,
  cards: [],
  flipped_indices: [],
  matched_count: 0,
  total_pairs: 8,
  symbols_index: [0, 1, 2, 3, 4, 5, 6, 7],
  game_active: true,
}

///|
pub fn get_card_width() -> Int {
  game.card_width
}

///|
pub fn get_card_height() -> Int {
  game.card_height
}

///|
pub fn get_padding() -> Int {
  game.padding
}

///|
pub fn game_active() -> Bool {
  game.game_active
}

///|
pub fn set_game_active(state : Bool) -> Unit {
  game.game_active = state
}

///|
fn init_game() -> Unit {
  // Create deck with pairs of symbols in order
  let deck : Array[Int] = []
  for i = 0; i < game.total_pairs; i = i + 1 {
    deck.push(game.symbols_index[i])
    deck.push(game.symbols_index[i])
  }
  game.cards = []

  // Fill the grid in row-major order with the deck (no shuffling)
  let mut index = 0
  for i = 0; i < game.rows; i = i + 1 {
    let row : Array[Card] = []
    for j = 0; j < game.cols; j = j + 1 {
      let card : Card = Card::{
        symbol_index: deck[index],
        flipped: false,
        matched: false,
      }
      row.push(card)
      index = index + 1
    }
    game.cards.push(row)
  }
}

///|
/// Initialize the game 
fn init {
  init_game()
}

///|
pub fn get_card_index(row : Int, col : Int) -> Int {
  for i = 0; i < game.rows; i = i + 1 {
    for j = 0; j < game.cols; j = j + 1 {
      if i == row && j == col {
        return game.cards[row][col].symbol_index
      }
    }
  }
  -1
  // indices
}

///|
pub fn set_card_index(row : Int, col : Int, symbol_index : Int) -> Unit {
  game.cards[row][col].symbol_index = symbol_index
}

///|
/// Get card symbol at position (row, col)
pub fn get_card_symbol(row : Int, col : Int) -> Int {
  if row >= 0 && row < game.rows && col >= 0 && col < game.cols {
    game.cards[row][col].symbol_index
  } else {
    -1
  }
}

///|
/// Check if card at position (row, col) is flipped
pub fn is_card_flipped(row : Int, col : Int) -> Bool {
  if row >= 0 && row < game.rows && col >= 0 && col < game.cols {
    game.cards[row][col].flipped
  } else {
    false
  }
}

///|
/// Check if card at position (row, col) is matched
pub fn is_card_matched(row : Int, col : Int) -> Bool {
  if row >= 0 && row < game.rows && col >= 0 && col < game.cols {
    game.cards[row][col].matched
  } else {
    false
  }
}

///|
pub fn set_flip_card_false(row : Int, col : Int) -> Unit {
  let card = game.cards[row][col]
  game.cards[row][col] = Card::{
    symbol_index: card.symbol_index,
    flipped: false,
    matched: card.matched,
  }
}

///|
pub fn set_flip_card_true(row : Int, col : Int) -> Unit {
  let card = game.cards[row][col]
  game.cards[row][col] = Card::{
    symbol_index: card.symbol_index,
    flipped: true,
    matched: card.matched,
  }
}

///|
/// Check if two flipped cards match
pub fn check_match(row1 : Int, col1 : Int, row2 : Int, col2 : Int) -> Bool {
  let symbol1 = game.cards[row1][col1].symbol_index
  let symbol2 = game.cards[row2][col2].symbol_index
  if symbol1 == symbol2 {
    // Mark cards as matched
    game.cards[row1][col1] = Card::{
      symbol_index: symbol1,
      flipped: true,
      matched: true,
    }
    game.cards[row2][col2] = Card::{
      symbol_index: symbol2,
      flipped: true,
      matched: true,
    }

    // Update matched count
    game.matched_count = game.matched_count + 1
    true
  } else {
    // Flip cards back
    game.cards[row1][col1] = Card::{
      symbol_index: symbol1,
      flipped: false,
      matched: false,
    }
    game.cards[row2][col2] = Card::{
      symbol_index: symbol2,
      flipped: false,
      matched: false,
    }
    false
  }
}

///|
pub fn reset_game() -> Unit {
  init_game()
}

///|
/// Reset flipped cards
pub fn reset_flipped() -> Unit {
  game.flipped_indices = []
}

///|
/// Check if game is won
pub fn is_game_won() -> Bool {
  game.matched_count == game.total_pairs
}

///|
/// Get game rows
pub fn get_rows() -> Int {
  game.rows
}

///|
/// Get game cols
pub fn get_cols() -> Int {
  game.cols
}

///|
/// Get matched count
pub fn get_matched_count() -> Int {
  game.matched_count
}

///|
/// Get total pairs
pub fn get_total_pairs() -> Int {
  game.total_pairs
}
