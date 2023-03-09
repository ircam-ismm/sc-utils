import { assert } from 'chai';
import * as utils from '../index.js';

describe('isBrowser() -> boolean', () => {
  it('should return false', () => {
    const { isBrowser } = utils;
    const res = isBrowser();
    assert.equal(res, false);
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

describe('isString() -> boolean', () => {
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

describe('isFunction() -> boolean', () => {
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

describe('isPlainObject() -> boolean', () => {
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

describe('scale() -> Function', () => {
  it('should create scale', () => {
    const { linearScale } = utils;
    const myScale = linearScale(0, 1, 50, 100);

    assert.equal(myScale(0), 50);
    assert.equal(myScale(0.5), 75);
    assert.equal(myScale(1), 100);
    assert.equal(myScale(-1), 0);
    assert.equal(myScale(2), 150);
  });

  it('should create scale', () => {
    const { linearScale } = utils;
    const myScale = linearScale(0, 1, 50, 100, true);

    assert.equal(myScale(0), 50);
    assert.equal(myScale(0.5), 75);
    assert.equal(myScale(1), 100);
    assert.equal(myScale(-1), 50);
    assert.equal(myScale(2), 100);
  });
});
