# sc-utils

Simple generic utilities (type check, common math functions, etc.)

## Install

```
npm install --save @ircam/sc-utils
```

## API

<!-- api -->
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [almostEqual][1]
*   [almostEqualArray][2]
*   [atodb][3]
*   [counter][4]
*   [dbtoa][5]
*   [decibelToLinear][6]
*   [decibelToPower][7]
*   [delay][8]
*   [exponentialScale][9]
*   [frequencyToMidi][10]
*   [ftom][11]
*   [getTime][12]
*   [hertzToNormalised][13]
*   [idGenerator][14]
*   [isBrowser][15]
*   [isFunction][16]
*   [isNumber][17]
*   [isPlainObject][18]
*   [isSequence][19]
*   [isString][20]
*   [isTouchDevice][21]
*   [isTypedArray][22]
*   [isURL][23]
*   [linearScale][24]
*   [linearToDecibel][25]
*   [logarithmicScale][26]
*   [midiToFrequency][27]
*   [mtof][28]
*   [normalisedToHertz][29]
*   [normalizedToTableScale][30]
*   [powerToDecibel][31]
*   [sleep][32]
*   [tableToNormalizedScale][33]

## almostEqual

Checks if two numeric values are approximately equal within a given
tolerance.

### Parameters

*   `value` **[number][34]** The first value to compare.
*   `reference` **[number][34]** The second value to compare.
*   `tolerance` **[number][34]** The tolerance within
    which the values are considered equal.
    Note: tolerance must take into account the sum of all relative and
    absolute errors. (optional, default `Number.EPSILON`)

### Examples

```javascript
import { almostEqual } from '@ircam/sc-utils';
almostEqual(0.1 + 0.2, 0.3); // true
almostEqual(0.1 + 0.2, 1e-18); // false
almostEqual(0.1, 0.11, 0.02); // true
```

Returns **[boolean][35]** Returns `true` if the values are approximately
equal, otherwise `false`.

## almostEqualArray

*   **See**: [almostEqual][1]

Checks if two arrays of numeric values are approximately equal element-wise
within a given tolerance.

### Parameters

*   `value` **[Array][36]<[number][34]>** The first array to compare.
*   `reference` **[Array][36]<[number][34]>** The second array to compare.
*   `tolerance` **[number][34]** The tolerance within which the
    values are considered equal.
    Note: tolerance must take into account the sum of all relative and
    absolute errors. (optional, default `Number.EPSILON`)

### Examples

```javascript
import { almostEqualArray } from '@ircam/sc-utils';
almostEqualArray([0.1, 0.1 + 0.2], [0.1, 0.3]); // true
```

Returns **[boolean][35]** Returns `true` if the arrays have got the same size, and
if every value of the same index are approximately equal. Otherwise `false`.

## atodb

Convert a linear gain into dB

*Alias:* `linearToDecibel`

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { atodb } from '@ircam/sc-utils';
atodb(0);
// > 1
```

Returns **[number][34]**&#x20;

## counter

Create a counter function.

### Parameters

*   `from` **[number][34]** Start of the counter, included (optional, default `0`)
*   `to` **[number][34]** End of the counter, included (optional, default `Number.MAX_SAFE_INTEGER`)
*   `step` **[number][34]** Increment / decrement step, if 0 returns `from` forever (optional, default `1`)

Returns **[Function][37]** import { counter } from '@ircam/sc-utils';
const myCounter = counter(0.1, 0.3, 0.1);
counter(); // 0.1
counter(); // 0.2
counter(); // 0.3
counter(); // 0.1
// ...

## dbtoa

Convert a dB into linear gain

*Alias:* `decibelToLinear`

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { dbtoa } from '@ircam/sc-utils';
dbtoa(0);
// > 1
```

Returns **[number][34]**&#x20;

## decibelToLinear

Convert a dB into linear gain (i.e. gain)

*Alias:* `dbtoa`

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { decibelToLinear } from '@ircam/sc-utils';
decibelToLinear(0);
// > 1
```

Returns **[number][34]**&#x20;

## decibelToPower

Convert a dB into power gain

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
// > 1
```

Returns **[number][34]**&#x20;

## delay

Wait for a given number of milliseconds.

See also `sleep`

### Parameters

*   `ms` **[Number][34]** Number of milliseconds to wait

### Examples

```javascript
import { delay } from '@ircam/sc-utils';
// wait for 1 second
await delay(1000);
```

Returns **[Promise][38]**&#x20;

## exponentialScale

Create an exponential scale function.

### Parameters

*   `inputStart` **[number][34]** Start value of input range
*   `inputEnd` **[number][34]** End value of input range
*   `outputStart` **[number][34]** Start value of output range
*   `outputEnd` **[number][34]** End value of output range
*   `base` **[number][34]** Base value for exponential scaling, default to `2` (optional, default `2`)
*   `clip` **[boolean][35]** Clip output to output range, default to `false` (optional, default `false`)

### Examples

```javascript
const { exponentialScale } = utils;
const midiToFreq = exponentialScale(69, 81, 440, 880);
midiToFreq(57);
// > 220
```

## frequencyToMidi

Convert a frequency in Hz to a MIDI note

### Parameters

*   `freq` **[number][34]** Frequency to convert

### Examples

```javascript
import { frequencyToMidi } from '@ircam/sc-utils';
const freq = frequencyToMidi(440);
// > 69
```

Returns **[number][34]**&#x20;

## ftom

Convert a frequency in Hz to a MIDI note

*Alias:* `frequencyToMidi`

### Parameters

*   `freq` **[number][34]** Frequency to convert

### Examples

```javascript
import { ftom } from '@ircam/sc-utils';
const freq = ftom(440);
// > 69
```

Returns **[number][34]**&#x20;

## getTime

Provide a unified clock in seconds accross platforms, with an origin defined by
the start of the process.

### Examples

```javascript
import { getTime } from '@ircam/sc-utils';

setInterval(() => {
  const now = getTime();
  // ...
}, 1000);
```

Returns **[number][34]**&#x20;

## hertzToNormalised

Convert a frequency in Hertz to a normalised one in \[0, 1].

Normalised frequency of 1 is half the sample-rate (Nyquist frequency).

### Parameters

*   `frequencyHertz` **[number][34]** Frequency in Hertz to convert
*   `sampleRate` **[number][34]** Twice the Nyquist frequency (optional, default `{}`)

    *   `sampleRate.sampleRate`   (optional, default `2`)

### Examples

```javascript
import { hertzToNormalised } from '@ircam/sc-utils';
hertzToNormalised(12000, {sampleRate: 48000});
// > 0.5
```

Returns **[number][34]**&#x20;

## idGenerator

Create a iterator of incrementing ids

*DEPRECATED* Use the more generic and user friendly `counter` instead.

### Examples

```javascript
import { idGenerator } from '@ircam/sc-utils';
const generator = idGenerator();
const id = generator.next().value
```

Returns **Iterator**&#x20;

## isBrowser

Check if the platform is a browser or a node process

### Examples

```javascript
import { isBrowser } from '@ircam/sc-utils';
isBrowser();
// > true|false
```

Returns **[boolean][35]**&#x20;

## isFunction

Check if the value is a function

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isFunction } from '@ircam/sc-utils';
isFunction(() => {});
// > true
```

Returns **[boolean][35]**&#x20;

## isNumber

Check if the value is a number, including Infinity.
If you want to excluse Infinity, check the native Number.isFinite function

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isNumber } from '@ircam/sc-utils';
isNumber(42);
// > true
```

Returns **[boolean][35]**&#x20;

## isPlainObject

Check if the value is a Plain Old Javascript Object (POJO)

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isPlainObject } from '@ircam/sc-utils';
isPlainObject({ a: 1 });
// > true
```

Returns **[boolean][35]**&#x20;

## isSequence

Check if the value is a sequence (`Array` or `TypedArray`) of finite numbers

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isSequence } from '@ircam/sc-utils';
isSequence([1, 2, 3]);
// > true
```

Returns **[boolean][35]**&#x20;

## isString

Check if the value is a string

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isString } from '@ircam/sc-utils';
isString('test');
// > true
```

Returns **[boolean][35]**&#x20;

## isTouchDevice

Check if the device supports touch events

### Examples

```javascript
import { isTouchDevice } from '@ircam/sc-utils';
isTouchDevice();
// > true|false
```

Returns **[boolean][35]**&#x20;

## isTypedArray

Check if the value is a TypedArray

### Parameters

*   `val` **any** Value to check

### Examples

```javascript
import { isTypedArray } from '@ircam/sc-utils';
isTypedArray(new Float32Array([1, 2, 3]));
// > true
```

Returns **[boolean][35]**&#x20;

## isURL

Check if the value is a valid URL

### Parameters

*   `url` &#x20;
*   `val` **any** Value to check

### Examples

```javascript
import { isURL } from '@ircam/sc-utils';
isURL('http://sub.my-site.org/abcd?test=123');
// > true
```

Returns **[boolean][35]**&#x20;

## linearScale

Create a linear scale function.

### Parameters

*   `inputStart` **[number][34]** Start value of input range
*   `inputEnd` **[number][34]** End value of input range
*   `outputStart` **[number][34]** Start value of output range
*   `outputEnd` **[number][34]** End value of output range
*   `clip` **[boolean][35]** Clip output to output range, default to `false` (optional, default `false`)

### Examples

```javascript
import { linearScale } from '@ircam/sc-utils';
const myScale = linearScale(0, 1, 50, 100);
myScale(0.5);
// > 75
```

Returns **[Function][37]**&#x20;

## linearToDecibel

Convert a linear gain into dB

*Alias:* `atodb`

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
// > 1
```

Returns **[number][34]**&#x20;

## logarithmicScale

Create a logarithmic scale function.

### Parameters

*   `inputStart` **[number][34]** Start value of input range
*   `inputEnd` **[number][34]** End value of input range
*   `outputStart` **[number][34]** Start value of output range
*   `outputEnd` **[number][34]** End value of output range
*   `base` **[number][34]** Base value for logarithmic scaling, default to `2` (optional, default `2`)
*   `clip` **[boolean][35]** Clip output to output range, default to `false` (optional, default `false`)

### Examples

```javascript
const { logarithmicScale } = utils;
const freqToMidi = logarithmicScale(440, 880, 69, 81);
freqToMidi(220);
// > 57
```

## midiToFrequency

Convert a MIDI note to frequency

### Parameters

*   `midiNote` **[number][34]** MIDI Note to convert

### Examples

```javascript
import { midiToFrequency } from '@ircam/sc-utils';
const freq = midiToFrequency(69);
// > 440
```

Returns **[number][34]**&#x20;

## mtof

Convert a MIDI note to frequency

*Alias:* `midiToFrequency`

### Parameters

*   `midiNote` **[number][34]** MIDI Note to convert

### Examples

```javascript
import { mtof } from '@ircam/sc-utils';
const freq = mtof(69);
// > 440
```

Returns **[number][34]**&#x20;

## normalisedToHertz

Convert a normalised frequency, in \[0, 1], to a frequency in Hertz.

Normalised frequency of 1 is half the sample-rate (Nyquist frequency).

### Parameters

*   `frequencyNormalised` **[number][34]** Normalised frequency to convert
*   `sampleRate` **[number][34]** Twice the Nyquist frequency (optional, default `{}`)

    *   `sampleRate.sampleRate`   (optional, default `2`)

### Examples

```javascript
import { normalisedToHertz } from '@ircam/sc-utils';
normalisedToHertz(0.5, {sampleRate: 48000});
// > 12000
```

Returns **[number][34]**&#x20;

## normalizedToTableScale

Create a scale function that returns a linearly interpolated value from the given
transfert table according to the given normalized position.

### Parameters

*   `transfertTable` **[Array][36]<[number][34]>** Sequence of finite numbers to use as lookup table

### Examples

```javascript
import { normalizedToTableScale } from '@ircam/sc-utils'
const scale = normalizedToTableScale([1, 2, 4])
scale(0);    // 1
scale(0.25); // 1.5
scale(0.5);  // 2
scale(0.75); // 3
scale(1);    // 4
```

Returns **[function][37]**&#x20;

## powerToDecibel

Convert a linear gain into dB

### Parameters

*   `val` **[number][34]** Value to convert

### Examples

```javascript
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
// > 1
```

Returns **[number][34]**&#x20;

## sleep

Wait for a given number of seconds.

See also `delay`

### Parameters

*   `sec` **[Number][34]** Number of seconds to wait

### Examples

```javascript
import { sleep } from '@ircam/sc-utils';
// wait for 1 second
await sleep(1);
```

Returns **[Promise][38]**&#x20;

## tableToNormalizedScale

Create a scale function that returns a normalized position in the transfert
table according to the given value.

### Parameters

*   `transfertTable` **[Array][36]<[number][34]>** Sequence of finite numbers to use as lookup table

### Examples

```javascript
import { tableToNormalized } from '@ircam/sc-utils'
const scale = tableToNormalized([1, 2, 4])
scale(1);    // 0
scale(1.5);  // 0.25
scale(2);    // 0.5
scale(3);    // 0.75
scale(4);    // 1
```

Returns **[function][37]**&#x20;

[1]: #almostequal

[2]: #almostequalarray

[3]: #atodb

[4]: #counter

[5]: #dbtoa

[6]: #decibeltolinear

[7]: #decibeltopower

[8]: #delay

[9]: #exponentialscale

[10]: #frequencytomidi

[11]: #ftom

[12]: #gettime

[13]: #hertztonormalised

[14]: #idgenerator

[15]: #isbrowser

[16]: #isfunction

[17]: #isnumber

[18]: #isplainobject

[19]: #issequence

[20]: #isstring

[21]: #istouchdevice

[22]: #istypedarray

[23]: #isurl

[24]: #linearscale

[25]: #lineartodecibel

[26]: #logarithmicscale

[27]: #miditofrequency

[28]: #mtof

[29]: #normalisedtohertz

[30]: #normalizedtotablescale

[31]: #powertodecibel

[32]: #sleep

[33]: #tabletonormalizedscale

[34]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[38]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

<!-- apistop -->

## License

[BSD-3-Clause](./LICENSE)

