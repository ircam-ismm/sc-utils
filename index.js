import isPlainObj from 'is-plain-obj';

// ---------------------------------------------------
// Platform
// ---------------------------------------------------

// https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser

/**
 * Check if the platform is a browser or a node process
 * @return {boolean}
 * @example
 * import { isBrowser } from '@ircam/sc-utils';
 * isBrowser();
 * // > true|false
 */
export const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

// ---------------------------------------------------
// Timing
// ---------------------------------------------------

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

/**
 * Same of `delay`, but given argument is in seconds
 * @param {Number} sec - Number of seconds to wait
 * @return {Promise}
 * @example
 * import { sleep } from '@ircam/sc-utils';
 * // wait for 1 second
 * await sleep(1);
 */
export function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

// ---------------------------------------------------
// Type check
// ---------------------------------------------------

/**
 * Check if the value is a string
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isString } from '@ircam/sc-utils';
 * isString('test');
 * // > true
 */
export function isString(val) {
  return (typeof val === 'string' || val instanceof String);
}

/**
 * Check if the value is a function
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isFunction } from '@ircam/sc-utils';
 * isFunction(() => {}));
 * // > true
 */
export function isFunction(func) {
  return Object.prototype.toString.call(func) == '[object Function]' ||
    Object.prototype.toString.call(func) == '[object AsyncFunction]';
}


/**
 * Check if the value is a number, including Infinity.
 * If you want to excluse Infinity, check the native Number.isFinite function
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isNumber } from '@ircam/sc-utils';
 * isNumber(42);
 * // > true
 */
export function isNumber(n) {
  return Number(n) === n;
}

/**
 * Check if the value is a Plain Old Javascript Object (POJO)
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isObject } from '@ircam/sc-utils';
 * isObject({ a: 1 });
 * // > true
 */
export function isPlainObject(obj) {
  return isPlainObj(obj);
}

/**
 * Check if the value is a TypedArray
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isTypedArray } from '@ircam/sc-utils';
 * isTypedArray(new Float32Array([1, 2, 3]));
 * // > true
 */
export function isTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

// ---------------------------------------------------
// Maths
// ---------------------------------------------------

/**
 * Convert a dB into linear gain (i.e. gain)
 * Alias: decibelToLinear
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { dbtoa } from '@ircam/sc-utils';
 * dbtoa(0);
 * // > 1
 */
export function dbtoa(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
}

/**
 * Convert a dB into linear gain (i.e. gain)
 * Alis: dbtoa
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToLinear } from '@ircam/sc-utils';
 * decibelToLinear(0);
 * // > 1
 */
export function decibelToLinear(val) {
  return dbtoa(val); // pow(10, val / 20)
}

/**
 * Convert a dB into power gain
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/sc-utils';
 * decibelToPower(0);
 * // > 1
 */
export function decibelToPower(val) {
  return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
}

/**
 * Convert a linear gain into dB
 * Alias: linearToDecibel
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { atodb } from '@ircam/sc-utils';
 * atodb(0);
 * // > 1
 */
export function atodb(val) {
  return 8.685889638065035 * Math.log(val); // 20 * log10(val);
}

/**
 * Convert a linear gain into dB
 * Alias: atodb
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/sc-utils';
 * decibelToPower(0);
 * // > 1
 */
export function linearToDecibel(val) {
  return atodb(atodb);
}

/**
 * Convert a linear gain into dB
 * @param {number} val - Value to convert
 * @return {number}
 * @example
 * import { decibelToPower } from '@ircam/sc-utils';
 * decibelToPower(0);
 * // > 1
 */
export function powerToDecibel(val) {
  return 4.3429448190325175 * Math.log(val); // 10 * log10(val)
}

/**
 * Convert a MIDI note to frequency
 * @param {number} midiNote - MIDI Note to convert
 * @return {number}
 * @example
 * import { mtof } from '@ircam/sc-utils';
 * const freq = mtof(69);
 * // > 440
 */
export function mtof(midiNote) {
  // https://www.music.mcgill.ca/~gary/307/week1/node28.html
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

/**
 * Convert a frequency to a MIDI note
 * @param {number} freq - Frequency to convert
 * @return {number}
 * @example
 * import { ftom } from '@ircam/sc-utils';
 * const freq = ftom(440);
 * // > 69
 */
export function ftom(freq) {
  // https://www.music.mcgill.ca/~gary/307/week1/node28.html
  return 12 * (Math.log(freq / 220) / Math.log(2)) + 57;
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
 * import { scale } from '@ircam/sc-utils';
 * const myScale = scale(0, 1, 50, 100);
 * myScale(0.5);
 * // > 75
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

// ---------------------------------------------------
// MISC
// ---------------------------------------------------

/**
 * Create a iterator of incrementing ids
 * @return {Iterator}
 * @example
 * import { idGenerator } from '@ircam/sc-utils';
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

