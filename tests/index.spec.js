import { assert } from 'chai';
import * as utils from '../src/index.js';

describe('isBrowser() -> boolean', () => {
  it('should return false', () => {
    const { isBrowser } = utils;
    const res = isBrowser();
    assert.equal(res, false);
  });
});

describe('isTouchDevice() -> boolean', () => {
  it('should return false', () => {
    const { isTouchDevice } = utils;
    const res = isTouchDevice();
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

describe('isNumber(val) -> boolean', () => {
  it('should check numbers', () => {
    const { isNumber } = utils;

    assert.equal(isNumber(0), true);
    assert.equal(isNumber(1), true);
    assert.equal(isNumber(2), true);
    assert.equal(isNumber(-1), true);
    assert.equal(isNumber(1.345e+17), true);
    assert.equal(isNumber(Infinity), true);

    assert.equal(isNumber(false), false);
    assert.equal(isNumber(true), false);
    assert.equal(isNumber(NaN), false);
    assert.equal(isNumber('1'), false);
    assert.equal(isNumber('0'), false);
    assert.equal(isNumber({}), false);
    assert.equal(isNumber([]), false);
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

describe('isURL(val) -> boolean', () => {
  it('should check URLs', () => {
    const { isURL } = utils;
    assert.equal(isURL('http://sub.my-site.org/abcd?test=123#coucou'), true);
    assert.equal(isURL('invalid'), false);
  })
});

describe('isSequence(val) -> boolean', () => {
  it('should check sequences of finite numbers', () => {
    const { isSequence } = utils;

    assert.equal(isSequence([1, 2, 3]), true);
    assert.equal(isSequence(new Float32Array([1, 2, 3])), true);
    assert.equal(isSequence(null), false);
    assert.equal(isSequence({}), false);
    assert.equal(isSequence(undefined), false);
    assert.equal(isSequence('test'), false);
    assert.equal(isSequence([1, NaN]), false);
    assert.equal(isSequence([1, Infinity]), false);
  })
});

describe('atodb(val) -> number', () => {
  it(`should convert linear amplitude to dB`, () => {
    const { atodb } = utils;

    assert.equal(atodb(1), 0);
    assert.equal(Math.round(atodb(0.5)), -6);
    assert.equal(Math.round(atodb(0.1)), -20);
    assert.equal(Math.round(atodb(0.01)), -40);
    assert.equal(Math.round(atodb(0.001)), -60);
  });
});

describe('dbtoa(val) -> number', () => {
  it(`should convert dB to linear amplitude`, () => {
    const { dbtoa } = utils;

    assert.equal(dbtoa(0), 1);
    assert.equal(parseFloat(dbtoa(-6).toFixed(2)), 0.5);
    assert.equal(parseFloat(dbtoa(-20).toFixed(2)), 0.1);
    assert.equal(parseFloat(dbtoa(-40).toFixed(3)), 0.01);
    assert.equal(parseFloat(dbtoa(-60).toFixed(4)), 0.001);
  });
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

describe(`Check frequency conversions`, () => {
  const { hertzToNormalised, normalisedToHertz } = utils;

  const testValues = [
    [{sampleRate: 44100}, 22050, 1],
    [{sampleRate: 44100}, 0, 0],
    [{sampleRate: 30}, 15, 1],
    [{sampleRate: 30}, 0, 0],
    [{sampleRate: 30}, 7.5, 0.5],
    [{sampleRate: 2}, 1.22, 1.22],
  ];

  it(`should convert from Hertz values and back`, () => {
    testValues.forEach( (values) => {
      assert.isBelow(Math.abs(normalisedToHertz(hertzToNormalised(values[1], values[0]),
                                                values[0])
                              - values[1]),
                              1e-3,
                     `from ${values[1]} hz`);
    });
  });

  it(`should convert from Hertz values and back`, () => {
    testValues.forEach( (values) => {
      assert.isBelow(Math.abs(hertzToNormalised(normalisedToHertz(values[2], values[0]),
                                                values[0])
                              - values[2]),
                              1e-3,
                     `from ${values[2]} normalised`);
    });
  });

  it(`should conform from Hertz values`, () => {
    testValues.forEach( (values) => {
      assert.isBelow(Math.abs(hertzToNormalised(values[1], values[0])
                              - values[2]),
                              1e-3,
                     `from ${values[1]} hz`);
    });
  });

  it(`should conform from normalised values`, () => {
    testValues.forEach( (values) => {
      assert.isBelow(Math.abs(normalisedToHertz(values[2], values[0])
                              - values[1]),
                     1e-3,
                     `from ${values[1]} normalised`);
    });
  });

});


describe('linearScale(inputStart, inputEnd, outputStart, outputEnd, clip = false) -> Function', () => {
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

  it('should create clamped scale with reversed boudaries (1)', () => {
    const { linearScale } = utils;
    const myScale = linearScale(1, 0, 0, 1, true);

    assert.equal(myScale(0), 1);
    assert.equal(myScale(0.5), 0.5);
    assert.equal(myScale(1), 0);
    assert.equal(myScale(-1), 1);
    assert.equal(myScale(2), 0);
  });

  it('should create clamped scale with reversed boudaries (2)', () => {
    const { linearScale } = utils;
    const myScale = linearScale(0, 1, 1, 0, true);

    assert.equal(myScale(0), 1);
    assert.equal(myScale(0.5), 0.5);
    assert.equal(myScale(1), 0);
    assert.equal(myScale(-1), 1);
    assert.equal(myScale(2), 0);
  });
});

describe('exponentialScale(inputStart, inputEnd, outputStart, outputEnd, base = 2, clip = false) -> Function', () => {
  // tests from sc-signal
  it(`zero range`, () => {
    const { exponentialScale } = utils;
    const scale = exponentialScale(5, 5, -5, -5);

    assert.closeTo(scale(5), -5, 1e-9);
    assert.closeTo(scale(2), -5, 1e-9);
    assert.closeTo(scale(12), -5, 1e-9);
  });

  it(`MIDI to freq`, () => {
    const { exponentialScale } = utils;
    const scale = exponentialScale(69, 81, 440, 880);

    assert.closeTo(scale(69), 440, 1e-9);
    assert.closeTo(scale(72), 523.251131, 1e-6);
    assert.closeTo(scale(81), 880, 1e-9);
    assert.closeTo(scale(57), 220, 1e-9);
    assert.closeTo(scale(93), 1760, 1e-9);
  });

  it(`MIDI to freq - start > end`, () => {
    const { exponentialScale } = utils;
    const scale = exponentialScale(81, 69, 880, 440, 0.5);

    assert.closeTo(scale(69), 440, 1e-9);
    assert.closeTo(scale(72), 523.251131, 1e-6);
    assert.closeTo(scale(81), 880, 1e-9);
    assert.closeTo(scale(57), 220, 1e-9);
    assert.closeTo(scale(93), 1760, 1e-9);
  });

  it(`decibel to amplitude`, () => {
    const { exponentialScale } = utils;
    const scale = exponentialScale(0, 20, 1, 10, 10);

    assert.closeTo(scale(0), 1, 1e-9);
    assert.closeTo(scale(20), 10, 1e-9);
    assert.closeTo(scale(-20), 0.1, 1e-9);
  });
});

describe('logarithmicScale(inputStart, inputEnd, outputStart, outputEnd, base = 2, clip = false) -> Function', () => {
  // tests from sc-signal
  it(`zero range`, () => {
    const { logarithmicScale } = utils;
    const scale = logarithmicScale(-5, -5, 5, 5);

    assert.closeTo(scale(-5), 5, 1e-9);
    assert.closeTo(scale(-5), 5, 1e-9);
    assert.closeTo(scale(-5), 5, 1e-9);
  });

  it(`freq to MIDI`, () => {
    const { logarithmicScale } = utils;
    const scale = logarithmicScale(440, 880, 69, 81);

    assert.closeTo(scale(440), 69, 1e-9);
    assert.closeTo(scale(523.251131), 72, 1e-6);
    assert.closeTo(scale(880), 81, 1e-9);
    assert.closeTo(scale(220), 57, 1e-9);
    assert.closeTo(scale(1760), 93, 1e-9);
  });

  it(`freq to MIDI - start > end`, () => {
    const { logarithmicScale } = utils;
    const scale = logarithmicScale(880, 440, 81, 69, 0.5);

    assert.closeTo(scale(440), 69, 1e-9);
    assert.closeTo(scale(523.251131), 72, 1e-6);
    assert.closeTo(scale(880), 81, 1e-9);
    assert.closeTo(scale(220), 57, 1e-9);
    assert.closeTo(scale(1760), 93, 1e-9);
  });

  it(`amplitude to decibel`, () => {
    const { logarithmicScale } = utils;
    const scale = logarithmicScale(1, 10, 0, 20, 10);

    assert.closeTo(scale(1), 0, 1e-9);
    assert.closeTo(scale(10), 20, 1e-9);
    assert.closeTo(scale(0.1), -20, 1e-9);
  });
});

describe('normalizedToTableScale(lookupTable)', () => {
  const { normalizedToTableScale } = utils;
  const transfertTable = [0, 0.25, 1];
  const typedArrayTransfertTable = new Float32Array(transfertTable);

  it(`should throw if wrong argument type`, () => {
    assert.throws(() => normalizedToTableScale(true));
    assert.throws(() => normalizedToTableScale(null));
    assert.throws(() => normalizedToTableScale({}));
    assert.throws(() => normalizedToTableScale([1])); // length >= 2
  });

  it(`should properly work`, () => {
    const scale = normalizedToTableScale(transfertTable);
    assert.equal(scale(0), 0);
    assert.equal(scale(1), 1);
    assert.equal(scale(0.5), 0.25);
    assert.equal(scale(0.25), 0.125);
    assert.equal(scale(0.75), 0.625);
  });

  it(`should clamp to table boundaries`, () => {
    // support typed arrays
    const scale = normalizedToTableScale(typedArrayTransfertTable);
    assert.equal(scale(-1), 0);
    assert.equal(scale(2), 1);
  });
});

describe('tableToNormalizedScale(lookupTable)', () => {
  const { tableToNormalizedScale } = utils;
  const transfertTable = [0, 0.25, 1];
  const typedArrayTransfertTable = new Float32Array(transfertTable);

  it(`should throw if wrong argument type`, () => {
    assert.throws(() => tableToNormalizedScale(true));
    assert.throws(() => tableToNormalizedScale(null));
    assert.throws(() => tableToNormalizedScale({}));
    assert.throws(() => tableToNormalizedScale([1])); // length >= 2
  });

  it(`should properly work`, () => {
    const scale = tableToNormalizedScale(transfertTable);
    assert.equal(scale(0), 0);
    assert.equal(scale(1), 1);
    assert.equal(scale(0.25), 0.5);
    assert.equal(scale(0.125), 0.25);
    assert.equal(scale(0.625), 0.75);
  });

  it(`should clamp to table boundaries`, () => {
    // support typed arrays
    const scale = tableToNormalizedScale(typedArrayTransfertTable);
    assert.equal(scale(-1), 0);
    assert.equal(scale(2), 1);
  });
});

describe('getTime', () => {
  it('should be re-exported from @ircam/sc-gettime', () => {
    const { getTime, isNumber } = utils;

    assert.equal(isNumber(getTime()), true);
  });
});

describe('counter', () => {
  const { counter } = utils;

  it('should work with defaul values', () => {
    const myCounter = counter();

    for (let i = 0; i < 1e3; i++) {
      assert.equal(myCounter(), i);
    }
  });

  it('should wrap', () => {
    const myCounter = counter(1, 3);

    assert.equal(myCounter(), 1);
    assert.equal(myCounter(), 2);
    assert.equal(myCounter(), 3);
    assert.equal(myCounter(), 1);
  });

  it('should handle different boundaries', () => {
    [[-1, 1], [1, -1]].forEach(([from, to]) => {
      const myCounter = counter(from, to);

      assert.equal(myCounter(), -1);
      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), 1);
      assert.equal(myCounter(), -1);
      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), 1)
    });
  });

  it('should support decimal step', () => {
    [[0, 1], [1, 0]].forEach(([from, to]) => {
      const myCounter = counter(from, to, 0.1);

      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), 0.1);
      assert.equal(myCounter(), 0.2);
      assert.equal(myCounter(), 0.3);
      assert.equal(myCounter(), 0.4);
      assert.equal(myCounter(), 0.5);
      assert.equal(myCounter(), 0.6);
      assert.equal(myCounter(), 0.7);
      assert.equal(myCounter(), 0.8);
      assert.equal(myCounter(), 0.9);
      assert.equal(myCounter(), 1);
      assert.equal(myCounter(), 0);
    });
  });

  it('should wrap (negative step)', () => {
    const myCounter = counter(3, 1, -1);

    assert.equal(myCounter(), 3);
    assert.equal(myCounter(), 2);
    assert.equal(myCounter(), 1);
    assert.equal(myCounter(), 3);
  });

  it('should handle different boundaries (negative step)', () => {
    [[1, -1], [-1, 1]].forEach(([from, to]) => {
      const myCounter = counter(from, to, -1);

      assert.equal(myCounter(), 1);
      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), -1);
      assert.equal(myCounter(), 1)
      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), -1);
    });
  });

  it('should support decimal step (negative step)', () => {
    [[1, 0], [0, 1]].forEach(([from, to]) => {
      const myCounter = counter(from, to, -0.1);

      assert.equal(myCounter(), 1);
      assert.equal(myCounter(), 0.9);
      assert.equal(myCounter(), 0.8);
      assert.equal(myCounter(), 0.7);
      assert.equal(myCounter(), 0.6);
      assert.equal(myCounter(), 0.5);
      assert.equal(myCounter(), 0.4);
      assert.equal(myCounter(), 0.3);
      assert.equal(myCounter(), 0.2);
      assert.equal(myCounter(), 0.1);
      assert.equal(myCounter(), 0);
      assert.equal(myCounter(), 1);
    });
  });

  it('should handle zero step', () => {
    [1, 6].forEach(from => {
      const myCounter = counter(from, 3, 0);

      assert.equal(myCounter(), from);
      assert.equal(myCounter(), from);
      assert.equal(myCounter(), from);
      assert.equal(myCounter(), from);
    });
  });
})
