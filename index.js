import isPlainObj from 'is-plain-obj';

// ---------------------------------------------------
// Platform
// ---------------------------------------------------

// https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser

/**
 * Check if the platform is a browser or a node process
 * @return {boolean}
 * @example
 * import { isBrowser } from '@ircam/utils';
 * isBrowser();
 * > true|false
 */
export const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

// ---------------------------------------------------
// Misc
// ---------------------------------------------------

/**
 * Create a iterator of incrementing ids
 * @return {Iterator}
 * @example
 * import { idGenerator } from '@ircam/utils';
 * const generator = idGenerator();
 * const id = generator.next().value
 */
export function* idGenerator() {
  for (let i = 0; true; i++) {
    if (i === Number.MAX_SAFE_INTEGER) {
      i = 0;
    }

    yield i;
  }
}

// ---------------------------------------------------
// Type check
// ---------------------------------------------------

/**
 * Check if the value is a string
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isString } from '@ircam/utils';
 * isString('test');
 * > true
 */
export function isString(val) {
  return (typeof val === 'string' || val instanceof String);
}

/**
 * Check if the value is a function
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isFunction } from '@ircam/utils';
 * isFunction(() => {}));
 * > true
 */
export function isFunction(func) {
  return Object.prototype.toString.call(func) == '[object Function]' ||
    Object.prototype.toString.call(func) == '[object AsyncFunction]';
}

/**
 * Check if the value is a Plain Old Javascript Object (POJO)
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isObject } from '@ircam/utils';
 * isObject({ a: 1 });
 * > true
 */
export function isPlainObject(obj) {
  return isPlainObj(obj);
}


// ---------------------------------------------------
// Maths
// ---------------------------------------------------

/**
 * Convert a dB into linear gain (i.e. gain)
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToLinear } from '@ircam/utils';
 * decibelToLinear(0);
 * > 1
 */
export function decibelToLinear(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
}

/**
 * Convert a dB into power gain
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/utils';
 * decibelToPower(0);
 * > 1
 */
export function decibelToPower(val) {
  return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
}

/**
 * Convert a linear gain into dB
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/utils';
 * decibelToPower(0);
 * > 1
 */
export function linearToDecibel(val) {
  return 8.685889638065035 * Math.log(val); // 20 * log10(val);
}

/**
 * Convert a linear gain into dB
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/utils';
 * decibelToPower(0);
 * > 1
 */
export function powerToDecibel(val) {
  return 4.3429448190325175 * Math.log(val); // 10 * log10(val)
}


/**
 * Create a scale function
 * @param {number} minIn - Minimum input
 * @param {number} maxIn - Maximum input
 * @param {number} minOut - Minimum output
 * @param {number} maxOut - Maximum output
 * @param {boolean} [clamp=false] - Clamp output
 * @return {Function}
 * @example
 * import { scale } from '@ircam/utils';
 * const myScale = scale(0, 1, 50, 100);
 * myScale(0.5);
 * > 75
 */
export function linearScale(minIn, maxIn, minOut, maxOut, clamp = false) {
  const a = (maxOut - minOut) / (maxIn - minIn);
  const b = minOut - a * minIn;
  if (!clamp) {
    return x => a * x + b;
  } else {
    return x => {
      const y = a * x + b;
      return Math.max(minOut, Math.min(maxOut, y));
    };
  }
}
