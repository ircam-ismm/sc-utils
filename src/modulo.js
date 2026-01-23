/**
 * Calculates the modulo operation with an optional offset.
 * @see https://en.wikipedia.org/wiki/Modulo
 *
 * @param {number} value - The value to apply the modulo operation to.
 * @param {number} modulus - The modulus divisor.
 * @param {number} [offset=0] - Optional offset to apply before and after the modulo operation.
 * @returns {number} The result of the modulo operation adjusted by the offset.
 * without offset:
 *   result in [0, modulus] for modulus > 0
 *   result in [modulus, 0] for modulus < 0
 *
 *  with offset:
 *   result in [offset, offset + modulus] for modulus > 0
 *   result in [modulus + offset, offset] for modulus < 0
 *
 * @example
 * modulo(-1, 360); // returns 359
 * modulo(1, 360); // returns 1
 * modulo(-1, -360); // returns -1
 * modulo(1, -360); // returns -359
 *
 * @example
 * modulo(-1, 360, -180); // returns -1
 * modulo(1, 360, -180); // returns 1
 * modulo(-1, -360, 180); // returns -1
 * modulo(1, -360, 180); // returns 1
 */
export function modulo(value, modulus, offset = 0) {
  return ((((value - offset) % modulus) + modulus) % modulus) + offset;
}
