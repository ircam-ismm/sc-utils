/**
 * Provide a unified clock in seconds accross platforms, with an origin defined by
 * the start of the process.
 *
 * @example
 * import { getTime } from '@ircam/sc-utils';
 *
 * setInterval(() => {
 *   const now = getTime();
 *   // ...
 * }, 1000);
 */
export { getTime } from '@ircam/sc-gettime';
