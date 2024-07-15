/**
 * Return a linearly interpolated value from the given transfert table
 * according to given normalized position.
 *
 * @param {number[]} transfertTable - Sequence of finite numbers to use as lookup table
 *
 * @example
 * import { normalizedToTableScale } from '@ircam/sc-utils'
 * const scale = normalizedToTableScale([1, 2, 4])
 * scale(0);    // 1
 * scale(0.25); // 1.5
 * scale(0.5);  // 2
 * scale(0.75); // 3
 * scale(1);    // 4
 */
export function normalizedToTableScale(transfertTable: number[]): (value: any) => number;
//# sourceMappingURL=normalized-to-table-scale.d.ts.map