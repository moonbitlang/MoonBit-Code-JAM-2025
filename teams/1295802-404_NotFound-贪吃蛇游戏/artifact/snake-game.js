function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function moonbitlang$core$builtin$$Logger$write_object$0$(self, obj) {
  moonbitlang$core$builtin$$Show$output$1$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$2$(self, obj) {
  moonbitlang$core$builtin$$Show$output$2$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$3$(self, obj) {
  moonbitlang$core$builtin$$Show$output$3$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$4$(self, obj) {
  moonbitlang$core$builtin$$Show$output$4$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$5$(self, obj) {
  if (obj) {
    self.method_0(self.self, "true");
    return;
  } else {
    self.method_0(self.self, "false");
    return;
  }
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$6$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$2$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$6$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$7$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$array$$Array$at$2$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$7$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Show$to_string$8$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$9$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$7$, method_1: moonbitlang$core$builtin$$Logger$write_substring$7$, method_2: moonbitlang$core$builtin$$Logger$write_char$7$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Logger$write_iter$46$inner$2$(self, iter, prefix, suffix, sep, trailing) {
  self.method_0(self.self, prefix);
  if (trailing) {
    iter((x) => {
      moonbitlang$core$builtin$$Logger$write_object$2$(self, x);
      self.method_0(self.self, sep);
      return 1;
    });
  } else {
    const first = { val: true };
    iter((_x) => {
      if (first.val) {
        first.val = false;
      } else {
        self.method_0(self.self, sep);
      }
      moonbitlang$core$builtin$$Logger$write_object$2$(self, x);
      return 1;
    });
  }
  self.method_0(self.self, suffix);
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, num2);
  }
  const _p = num % radix | 0;
  const _tmp = _p < 0 ? 0 - _p | 0 : _p;
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1910(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$string$$String$substring$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$7$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$output$4$(self, logger) {
  moonbitlang$core$int$$Int$output$46$inner(self, logger, 10);
}
function moonbitlang$core$array$$Array$iter$2$(self) {
  const _p = (yield_) => {
    const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      const _bind = yield_(v);
      if (_bind === 1) {
      } else {
        return 0;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return 1;
    }
  }
  };
  return _p;
}
function moonbitlang$core$builtin$$Show$output$1$(self, logger) {
  moonbitlang$core$builtin$$Logger$write_iter$46$inner$2$(logger, moonbitlang$core$array$$Array$iter$2$(self), "[", "]", ", ", false);
}
function moonbitlang$core$builtin$$println$10$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$println$9$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$8$(input));
}
function moonbitlang$core$array$$Array$make$2$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$set$2$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$builtin$$Add$add$1$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$2$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$2$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$builtin$$Show$output$9$(_x_44, _x_45) {
  _x_45.method_0(_x_45.self, "{");
  _x_45.method_0(_x_45.self, "snake: ");
  moonbitlang$core$builtin$$Logger$write_object$0$(_x_45, _x_44.snake);
  _x_45.method_0(_x_45.self, ", ");
  _x_45.method_0(_x_45.self, "food: ");
  moonbitlang$core$builtin$$Logger$write_object$2$(_x_45, _x_44.food);
  _x_45.method_0(_x_45.self, ", ");
  _x_45.method_0(_x_45.self, "direction: ");
  moonbitlang$core$builtin$$Logger$write_object$3$(_x_45, _x_44.direction);
  _x_45.method_0(_x_45.self, ", ");
  _x_45.method_0(_x_45.self, "score: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_45, _x_44.score);
  _x_45.method_0(_x_45.self, ", ");
  _x_45.method_0(_x_45.self, "game_over: ");
  moonbitlang$core$builtin$$Logger$write_object$5$(_x_45, _x_44.game_over);
  _x_45.method_0(_x_45.self, ", ");
  _x_45.method_0(_x_45.self, "random_seed: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_45, _x_44.random_seed);
  _x_45.method_0(_x_45.self, "}");
}
function moonbitlang$core$builtin$$Show$output$3$(_x_40, _x_41) {
  switch (_x_40) {
    case 0: {
      _x_41.method_0(_x_41.self, "Up");
      return;
    }
    case 1: {
      _x_41.method_0(_x_41.self, "Down");
      return;
    }
    case 2: {
      _x_41.method_0(_x_41.self, "Left");
      return;
    }
    default: {
      _x_41.method_0(_x_41.self, "Right");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$2$(_x_36, _x_37) {
  _x_37.method_0(_x_37.self, "{");
  _x_37.method_0(_x_37.self, "x: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_37, _x_36.x);
  _x_37.method_0(_x_37.self, ", ");
  _x_37.method_0(_x_37.self, "y: ");
  moonbitlang$core$builtin$$Logger$write_object$4$(_x_37, _x_36.y);
  _x_37.method_0(_x_37.self, "}");
}
function username$snake_main$$init_game() {
  const snake = [{ x: 5, y: 10 }, { x: 4, y: 10 }, { x: 3, y: 10 }];
  const food = { x: 10, y: 10 };
  return { snake: snake, food: food, direction: 3, score: 0, game_over: false, random_seed: 12345 };
}
function username$snake_main$$is_point_on_snake(point, snake) {
  for (let i = 0; i < snake.length; i = i + 1) {
    if (point.x === snake[i].x && point.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function username$snake_main$$generate_food(snake, seed) {
  console.log('generate_food called with seed:', seed, 'snake length:', snake.length);
  let current_seed = seed;
  let food_point = { x: 0, y: 0 };
  let found_valid = false;
  
  while (!found_valid) {
    const new_seed = ((Math.imul(current_seed, 1103515245) | 0) + 12345 | 0) % 2147483647 | 0;
    const x = (new_seed % 20 + 20) % 20;
    const newer_seed = ((Math.imul(new_seed, 1103515245) | 0) + 12345 | 0) % 2147483647 | 0;
    const y = (newer_seed % 20 + 20) % 20;
    food_point = { x: x, y: y };
    current_seed = newer_seed;
    
    // 检查食物是否不在蛇身上
    if (!username$snake_main$$is_point_on_snake(food_point, snake)) {
      found_valid = true;
    }
  }
  
  console.log('generate_food returning food:', food_point, 'new seed:', current_seed);
  return { _0: food_point, _1: current_seed };
}
function username$snake_main$$check_collision(snake) {
  const head = moonbitlang$core$array$$Array$at$2$(snake, 0);
  if (head.x < 0 || (head.x >= 20 || (head.y < 0 || head.y >= 20))) {
    return true;
  }
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < snake.length) {
      if (head.x === moonbitlang$core$array$$Array$at$2$(snake, i).x && head.y === moonbitlang$core$array$$Array$at$2$(snake, i).y) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function username$snake_main$$move_snake(game) {
  if (game.game_over) {
    return game;
  }
  const head = moonbitlang$core$array$$Array$at$2$(game.snake, 0);
  const _bind = game.direction;
  let new_head;
  switch (_bind) {
    case 0: {
      new_head = { x: head.x, y: head.y - 1 | 0 };
      break;
    }
    case 1: {
      new_head = { x: head.x, y: head.y + 1 | 0 };
      break;
    }
    case 2: {
      new_head = { x: head.x - 1 | 0, y: head.y };
      break;
    }
    default: {
      new_head = { x: head.x + 1 | 0, y: head.y };
    }
  }
  const new_snake = moonbitlang$core$builtin$$Add$add$1$([new_head], game.snake);
  const ate_food = new_head.x === game.food.x && new_head.y === game.food.y;
  console.log('ate_food:', ate_food, 'new_head:', new_head, 'game.food:', game.food);
  let final_snake;
  if (ate_food) {
    final_snake = new_snake;
  } else {
    const result = moonbitlang$core$array$$Array$make$2$(new_snake.length - 1 | 0, { x: 0, y: 0 });
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < (new_snake.length - 1 | 0)) {
        moonbitlang$core$array$$Array$set$2$(result, i, moonbitlang$core$array$$Array$at$2$(new_snake, i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    final_snake = result;
  }
  
  let new_food_and_seed;
  if (ate_food) {
    console.log('Before generate_food, random_seed:', game.random_seed);
    new_food_and_seed = username$snake_main$$generate_food(final_snake, game.random_seed);
    console.log('After generate_food, new seed:', new_food_and_seed._1);
  } else {
    new_food_and_seed = { _0: game.food, _1: game.random_seed };
  }
  const _new_food = new_food_and_seed._0;
  const _new_seed = new_food_and_seed._1;
  const new_score = ate_food ? game.score + 1 | 0 : game.score;
  const collision = username$snake_main$$check_collision(final_snake);
  return { snake: final_snake, food: _new_food, direction: game.direction, score: new_score, game_over: collision, random_seed: _new_seed };
}
function username$snake_main$$change_direction(game, new_dir) {
  // Prevent 180-degree turns
  const can_change = (() => {
    const _bind = game.direction;
    const _bind$2 = new_dir;
    switch (_bind) {
      case 0: {
        switch (_bind$2) {
          case 1: {
            return false;
          }
          default: {
            return true;
          }
        }
      }
      case 1: {
        switch (_bind$2) {
          case 0: {
            return false;
          }
          default: {
            return true;
          }
        }
      }
      case 2: {
        switch (_bind$2) {
          case 3: {
            return false;
          }
          default: {
            return true;
          }
        }
      }
      default: {
        switch (_bind$2) {
          case 2: {
            return false;
          }
          default: {
            return true;
          }
        }
      }
    }
  })();
  
  if (can_change) {
    return { snake: game.snake, food: game.food, direction: new_dir, score: game.score, game_over: game.game_over, random_seed: game.random_seed };
  } else {
    return game;
  }
}
function username$snake_main$$js_init_game() {
  return username$snake_main$$init_game();
}
function username$snake_main$$js_move_snake(game) {
  return username$snake_main$$move_snake(game);
}
function username$snake_main$$js_change_direction(game, dir) {
  let direction;
  switch (dir) {
    case "up": {
      direction = 0;
      break;
    }
    case "down": {
      direction = 1;
      break;
    }
    case "left": {
      direction = 2;
      break;
    }
    case "right": {
      direction = 3;
      break;
    }
    default: {
      direction = game.direction;
    }
  }
  return username$snake_main$$change_direction(game, direction);
}
(() => {
  const game = username$snake_main$$js_init_game();
  moonbitlang$core$builtin$$println$10$("Initial game state: ");
  moonbitlang$core$builtin$$println$9$(game);
  const moved_game = username$snake_main$$js_move_snake(game);
  moonbitlang$core$builtin$$println$10$("After moving: ");
  moonbitlang$core$builtin$$println$9$(moved_game);
})();
