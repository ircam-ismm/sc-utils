// ---------------------------------------------------
// Platform
// ---------------------------------------------------

export { isBrowser } from './is-browser.js';
export { isTouchDevice } from './is-touch-device.js';

// ---------------------------------------------------
// Timing
// ---------------------------------------------------

export { delay } from './delay.js';
export { sleep } from './sleep.js';
export { getTime } from './get-time.js';

// ---------------------------------------------------
// Type check
// ---------------------------------------------------

export { isDefined } from './is-defined.js';
export { isFunction } from './is-function.js';
export { isNumber } from './is-number.js';
export { isPlainObject } from './is-plain-object.js';
export { isString } from './is-string.js';
export { isTypedArray } from './is-typed-array.js';
export { isURL } from './is-url.js';
export { isSequence } from './is-sequence.js';

// ---------------------------------------------------
// Maths
// ---------------------------------------------------

export { atodb } from './atodb.js';
export { almostEqual, almostEqualArray } from './almostEqual.js';
export { linearToDecibel } from './linear-to-decibel.js';
export { powerToDecibel } from './power-to-decibel.js';

export { dbtoa } from './dbtoa.js';
export { decibelToLinear } from './decibel-to-linear.js';
export { decibelToPower } from './decibel-to-power.js';

export { ftom } from './ftom.js';
export { midiToFrequency } from './midi-to-frequency.js';
export { mtof } from './mtof.js';
export { frequencyToMidi } from './frequency-to-midi.js';

export { hertzToNormalised } from './hertz-to-normalised.js';
export { normalisedToHertz } from './normalised-to-hertz.js';

export { linearScale } from './linear-scale.js';
export { exponentialScale } from './exponential-scale.js';
export { logarithmicScale } from './logarithmic-scale.js';
export { normalizedToTableScale } from './normalized-to-table-scale.js';
export { tableToNormalizedScale } from './table-to-normalized-scale.js';

export { modulo } from './modulo.js';

// ---------------------------------------------------
// MISC
// ---------------------------------------------------

export { idGenerator } from './id-generator.js';
export { counter } from './counter.js';
