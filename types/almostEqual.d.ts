/**
 * Checks if two numeric values are approximately equal within a given
 * tolerance.
 *
 *
 * @param {number} value - The first value to compare.
 * @param {number} reference - The second value to compare.
 * @param {number} [tolerance=Number.EPSILON] - The tolerance within
 * which the values are considered equal.
 * Note: tolerance must take into account the sum of all relative and
 * absolute errors.
 *
 * @returns {boolean} Returns `true` if the values are approximately
 * equal, otherwise `false`.
 *
 * @example
 * import { almostEqual } from '@ircam/sc-utils';
 * almostEqual(0.1 + 0.2, 0.3); // true
 * almostEqual(0.1 + 0.2, 1e-18); // false
 * almostEqual(0.1, 0.11, 0.02); // true
 */
export function almostEqual(value: number, reference: number, tolerance?: number): boolean;
/**
 * Checks if two arrays of numeric values are approximately equal element-wise
 * within a given tolerance.
 *
 * @param {number[]} value - The first array to compare.
 * @param {number[]} reference - The second array to compare.
 * @param {number} [tolerance=Number.EPSILON] - The tolerance within which the
 * values are considered equal.
 * Note: tolerance must take into account the sum of all relative and
 * absolute errors.
 *
 * @returns {boolean} Returns `true` if the arrays have got the same size, and
 * if every value of the same index are approximately equal. Otherwise `false`.
 *
 * @see {@link almostEqual}
 *
 * @example
 * import { almostEqualArray } from '@ircam/sc-utils';
 * almostEqualArray([0.1, 0.1 + 0.2], [0.1, 0.3]); // true
 */
export function almostEqualArray(value: number[], reference: number[], tolerance?: number): boolean;
//# sourceMappingURL=almostEqual.d.ts.map