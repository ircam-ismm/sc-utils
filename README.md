# @ircam/utils

Simple generic utilities (type check, common math functions, etc.)

## Install

```
npm install --save @ircam/sc-utils
```

## API

<!-- api -->

### Constants

<dl>
<dt><a href="#isBrowser">isBrowser</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the platform is a browser or a node process</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#idGenerator">idGenerator()</a> ⇒ <code>Iterator</code></dt>
<dd><p>Create a iterator of incrementing ids</p>
</dd>
<dt><a href="#delay">delay(ms)</a> ⇒ <code>Promise</code></dt>
<dd><p>Waits for given number of milliseconds</p>
</dd>
<dt><a href="#isString">isString(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is a string</p>
</dd>
<dt><a href="#isFunction">isFunction(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is a function</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is a Plain Old Javascript Object (POJO)</p>
</dd>
<dt><a href="#isTypedArray">isTypedArray(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is a TypedArray</p>
</dd>
<dt><a href="#decibelToLinear">decibelToLinear(val)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a dB into linear gain (i.e. gain)</p>
</dd>
<dt><a href="#decibelToPower">decibelToPower(val)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a dB into power gain</p>
</dd>
<dt><a href="#linearToDecibel">linearToDecibel(val)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a linear gain into dB</p>
</dd>
<dt><a href="#powerToDecibel">powerToDecibel(val)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a linear gain into dB</p>
</dd>
<dt><a href="#linearScale">linearScale(minIn, maxIn, minOut, maxOut, [clamp])</a> ⇒ <code>function</code></dt>
<dd><p>Create a scale function</p>
</dd>
</dl>

<a name="isBrowser"></a>

### isBrowser ⇒ <code>boolean</code>
Check if the platform is a browser or a node process

**Kind**: global constant  
**Example**  
```js
import { isBrowser } from '@ircam/sc-utils';
isBrowser();
> true|false
```
<a name="idGenerator"></a>

### idGenerator() ⇒ <code>Iterator</code>
Create a iterator of incrementing ids

**Kind**: global function  
**Example**  
```js
import { idGenerator } from '@ircam/sc-utils';
const generator = idGenerator();
const id = generator.next().value
```
<a name="delay"></a>

### delay(ms) ⇒ <code>Promise</code>
Waits for given number of milliseconds

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> | Number of milliseconds to wait |

**Example**  
```js
import { delay } from '@ircam/sc-utils';
// wait for 1 second
await delay(1000);
```
<a name="isString"></a>

### isString(val) ⇒ <code>boolean</code>
Check if the value is a string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | Value to check |

**Example**  
```js
import { isString } from '@ircam/sc-utils';
isString('test');
> true
```
<a name="isFunction"></a>

### isFunction(val) ⇒ <code>boolean</code>
Check if the value is a function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | Value to check |

**Example**  
```js
import { isFunction } from '@ircam/sc-utils';
isFunction(() => {}));
> true
```
<a name="isPlainObject"></a>

### isPlainObject(val) ⇒ <code>boolean</code>
Check if the value is a Plain Old Javascript Object (POJO)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | Value to check |

**Example**  
```js
import { isObject } from '@ircam/sc-utils';
isObject({ a: 1 });
> true
```
<a name="isTypedArray"></a>

### isTypedArray(val) ⇒ <code>boolean</code>
Check if the value is a TypedArray

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | Value to check |

**Example**  
```js
import { isTypedArray } from '@ircam/sc-utils';
isTypedArray(new Float32Array([1, 2, 3]));
> true
```
<a name="decibelToLinear"></a>

### decibelToLinear(val) ⇒ <code>number</code>
Convert a dB into linear gain (i.e. gain)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | Value to convert |

**Example**  
```js
import { decibelToLinear } from '@ircam/sc-utils';
decibelToLinear(0);
> 1
```
<a name="decibelToPower"></a>

### decibelToPower(val) ⇒ <code>number</code>
Convert a dB into power gain

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | Value to convert |

**Example**  
```js
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
> 1
```
<a name="linearToDecibel"></a>

### linearToDecibel(val) ⇒ <code>number</code>
Convert a linear gain into dB

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | Value to convert |

**Example**  
```js
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
> 1
```
<a name="powerToDecibel"></a>

### powerToDecibel(val) ⇒ <code>number</code>
Convert a linear gain into dB

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | Value to convert |

**Example**  
```js
import { decibelToPower } from '@ircam/sc-utils';
decibelToPower(0);
> 1
```
<a name="linearScale"></a>

### linearScale(minIn, maxIn, minOut, maxOut, [clamp]) ⇒ <code>function</code>
Create a scale function

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| minIn | <code>number</code> |  | Minimum input |
| maxIn | <code>number</code> |  | Maximum input |
| minOut | <code>number</code> |  | Minimum output |
| maxOut | <code>number</code> |  | Maximum output |
| [clamp] | <code>boolean</code> | <code>false</code> | Clamp output |

**Example**  
```js
import { scale } from '@ircam/sc-utils';
const myScale = scale(0, 1, 50, 100);
myScale(0.5);
> 75
```

<!-- apistop -->

## License

[BSD-3-Clause](./LICENSE)

