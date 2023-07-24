import { assert } from 'chai';
import * as utils from '../index.js';

describe('isBrowser() -> boolean', () => {
  it('should return false', () => {
    const { isBrowser } = utils;
    const res = isBrowser();
    assert.equal(res, false);
  });
});

describe('delay(ms) -> Promise', () => {
  it('should wait', async () => {
    const { delay } = utils;
    let start = Date.now();

    await delay(300);

    let end = Date.now();
    assert.equal(end - start >= 300, true);
  });
});

describe('sleep(sec) -> Promise', () => {
  it('should wait', async () => {
    const { sleep } = utils;
    let start = Date.now();

    await sleep(0.1);

    let end = Date.now();
    assert.equal(end - start >= 100, true);
  });
});

describe('idGenerator() -> Iterator', () => {
  it('should create ', () => {
    const { idGenerator } = utils;
    const generator = idGenerator();

    const zero = generator.next().value
    assert.equal(zero, 0);

    const one = generator.next().value
    assert.equal(one, 1);
  });
});

describe('isString(val) -> boolean', () => {
  it('should check strings', () => {
    const { isString } = utils;
    assert.equal(isString(''), true);
    assert.equal(isString('aa'), true);
    assert.equal(isString(new String('aa')), true);

    assert.equal(isString(42), false);
    assert.equal(isString(true), false);
    assert.equal(isString({}), false);
    assert.equal(isString([]), false);
  })
});

describe('isFunction(val) -> boolean', () => {
  it('should check function', () => {
    const { isFunction } = utils;
    assert.equal(isFunction(function() {}), true);
    assert.equal(isFunction(() => {}), true);
    assert.equal(isFunction(async function() {}), true);
    assert.equal(isFunction(async () => {}), true);

    assert.equal(isFunction(42), false);
    assert.equal(isFunction(true), false);
    assert.equal(isFunction({}), false);
    assert.equal(isFunction([]), false);
  })
});

describe('isPlainObject(val) -> boolean', () => {
  it('should check pojos', () => {
    const { isPlainObject } = utils;
    class Test {}
    assert.equal(isPlainObject({}), true);
    assert.equal(isPlainObject(new Object()), true);

    assert.equal(isPlainObject(new Test()), false);
    assert.equal(isPlainObject(42), false);
    assert.equal(isPlainObject(true), false);
    assert.equal(isPlainObject(() => {}), false);
    assert.equal(isPlainObject([]), false);
  })
});

describe('mtof(midiNote) -> number', () => {
  it('should compute frequency from MIDI note', () => {
    const { mtof } = utils;

    assert.equal(mtof(69), 440);
    assert.equal(mtof(69 + 12), 880);
    assert.equal(mtof(69 - 24), 110);
    assert.equal(parseFloat(mtof(101).toFixed(2)), 2793.83);
    assert.equal(parseFloat(mtof(49).toFixed(2)), 138.59);
  });
});

describe('ftom(freq) -> number', () => {
  it('should compute MIDI note from frequency', () => {
    const { ftom } = utils;

    assert.equal(ftom(220), 69 - 12);
    assert.equal(ftom(880), 69 + 12);
    assert.equal(ftom(110), 69 - 24);
    assert.isBelow(Math.abs(ftom(2793.83) - 101), 1e-3);
    assert.isBelow(Math.abs(ftom(138.59) - 49), 1e-3);
  });
});

describe('scale(minIn, maxIn, minOut, maxOut, clamp = false) -> Function', () => {
  it('should create scale', () => {
    const { linearScale } = utils;
    const myScale = linearScale(0, 1, 50, 100);

    assert.equal(myScale(0), 50);
    assert.equal(myScale(0.5), 75);
    assert.equal(myScale(1), 100);
    assert.equal(myScale(-1), 0);
    assert.equal(myScale(2), 150);
  });

  it('should create clamped scale', () => {
    const { linearScale } = utils;
    const myScale = linearScale(0, 1, 50, 100, true);

    assert.equal(myScale(0), 50);
    assert.equal(myScale(0.5), 75);
    assert.equal(myScale(1), 100);
    assert.equal(myScale(-1), 50);
    assert.equal(myScale(2), 100);
  });
});
