/**
 * Waits for given number of milliseconds
 * @param {Number} ms - Number of milliseconds to wait
 * @return {Promise}
 * @example
 * import { delay } from '@ircam/sc-utils';
 * // wait for 1 second
 * await delay(1000);
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
