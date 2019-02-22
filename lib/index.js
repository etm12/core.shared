/// <reference path="./index.d.ts" />
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as I from 'infestines';

export const flip = U.lift(
  I.curry(function flip(f, y, x) {
    return f(x, y);
  }),
);

export const apply = U.lift(
  I.curry(function apply(f, xs) {
    return f.apply(f, xs);
  }),
);

export const invoker0 = U.lift(
  I.curry(function invoker0 (m, o) {
    return o[m]();
  }),
);

export const invoker1 = U.lift(
  I.curry(function invoker1 (m, x, o) {
    return o[m](x);
  }),
);

export const invoker2 = U.lift(
  I.curry(function invoker2 (m, x, y, o) {
    return o[m](x, y);
  }),
);

export const call0 = I.defineNameU(U.lift(fn => fn()), 'call0');

// Events -------------------------------------------------------------

export const persist = I.defineNameU(invoker0('persist'), 'persist');

// Canvas -------------------------------------------------------------

export const computeIx = U.lift(
  I.curry(function computeIx(m, x, y, w) {
    return ((y * w) + x) * m;
  }),
);

export const getIxRange = U.lift(
  I.curry(function getIxRange(m, x, y, w) {
    const start = computeIx(m, x, y, w);
    return [start, start + m];
  }),
);

export const getIxRangeObj = U.lift(
  I.curry(function getIxRangeObj(m, x, y, w) {
    const [start, end] = getIxRange(m, x, y, w);
    return { start, end };
  }),
);
