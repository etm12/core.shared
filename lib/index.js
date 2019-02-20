/// <reference path="./index.d.ts" />
import * as I from 'infestines';
import * as R from 'kefir.ramda';

export const flip = I.curry(function flip(f, y, x) {
  return f(x, y);
});

export const apply = I.curry(function apply(f, xs) {
  return f.apply(f, xs);
});

export const invoker0 = I.curry(function invoker0 (m, o) {
  return o[m]();
});

export const invoker1 = I.curry(function invoker1 (m, x, o) {
  return o[m](x);
});

export const invoker2 = I.curry(function invoker2 (m, x, y, o) {
  return o[m](x, y);
});

export const call0 = fn => fn();
