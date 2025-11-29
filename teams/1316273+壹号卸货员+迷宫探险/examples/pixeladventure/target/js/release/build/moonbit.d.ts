/**
 * A non-public unique symbol used to mark the brand of a type.
 * And avoid user to construct values of the type.
 */
export const __brand: unique symbol;

export type Unit = undefined;
export type Bool = boolean;

/**
 * A signed integer in 32-bit two's complement format.
 */
export type Int = number;

/**
 * An unsigned integer in 32-bit two's complement format.
 */
export type UInt = number;

/**
 * A character in the range 0-0x10FFFF.
 */
export type Char = number;

/**
 * A byte in the range 0-255.
 */
export type Byte = number;

/**
 * Single-precision floating point number.
 */
export type Float = number;

export type Double = number;

export type Int64 = { [__brand]: 568910272 };

export type UInt64 = { [__brand]: 689305396 };

export type String = string;

export type Bytes = Uint8Array;

export type FixedArray<T> = T[];

export type UnboxedOption<T> = 
  | /* Some */ T 
  | /* None */ undefined;

export type UnboxedOptionAsInt<T> = 
  | /* Some */ T 
  | /* None */ -1;

export type Result<T, E> =
  | /* Ok */ { $tag: 1, _0: T }
  | /* Err */ { $tag: 0, _0: E };
