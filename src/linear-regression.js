/**
 * Perform a linear regression on a list of [x, y] tuples.
 *
 * Throws if values length < 2
 *
 * @param {Array.<Array.<number>>} values - List of [x, y] tuples
 * @return {number} - Slope
 * @throws - Throws if `values.length < 2` or if an elements of the list is not a [x, y] tuple of finite numbers
 * @example
 * import { frequencyToMidi } from '@ircam/sc-utils';
 * const freq = frequencyToMidi(440);
 * // > 69
 */
export function linearRegression(values) {
  if (values.length < 2) {
    throw new TypeError(`Cannot execute "linearRegression": argument 1 length is lower than 2`);
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i].length !== 2) {
      throw new TypeError(`Cannot execute "linearRegression": elements ${i} (${values} does not contain strictly 2 elements`);
    }

    const [x, y] = values[i];

    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new TypeError(`Cannot execute "linearRegression": elements ${i} (${values} contains a non-finite value`);
    }
  }

  const length = values.length;
  // means
  let xSum = 0;
  let ySum = 0;

  for (let i = 0; i < length; i++) {
    xSum += values[i][0];
    ySum += values[i][1];
  }

  const xMean = xSum / length;
  const yMean = ySum / length;

  // sum[ pow((x - xMean), 2) ]
  let sumDiffXMeanSquared = 0;
  // sum[ pow((y - yMean), 2) ]
  let sumDiffYMeanSquared = 0;
  // sum[ (x - xMean)(y - yMean) ]
  let sumDiffXYMean = 0;

  for (let i = 0; i < length; i++) {
    const diffXMean = values[i][0] - xMean;
    const diffYMean = values[i][1] - yMean;
    sumDiffXMeanSquared += (diffXMean * diffXMean);
    sumDiffYMeanSquared += (diffYMean * diffYMean);
    sumDiffXYMean += (diffXMean * diffYMean);
  }

  // vertical line
  if (sumDiffXMeanSquared === 0) {
    return Infinity;
  }

  // horizontal line
  if (sumDiffYMeanSquared === 0) {
    return 0;
  }

  // Pearson correlation coefficient:
  // cf. https://www.youtube.com/watch?v=2SCg8Kuh0tE
  //
  //                 ∑ [ (x - xMean)(y - yMean) ]
  // r = ------------------------------------------------------
  //     sqrt( ∑ [ pow((x - xMean), 2), pow((y - yMean), 2) ] )
  //
  //
  const r = sumDiffXYMean / Math.sqrt(sumDiffXMeanSquared * sumDiffYMeanSquared);

  // then we have:
  // cf. https://www.youtube.com/watch?v=GhrxgbQnEEU
  //
  // y = a + bx
  // where:
  //         Sy
  // b = r * --
  //         Sx
  //
  // a = yMean - b * xMean
  //
  // S for standard deviation
  //            ∑ [ pow((x - xMean), 2) ]
  // Sx = sqrt( -------------------------  )
  //                      N - 1
  const Sx = Math.sqrt(sumDiffXMeanSquared / (length - 1));
  const Sy = Math.sqrt(sumDiffYMeanSquared / (length - 1));
  const b = r * (Sy / Sx);

  return b;
}
