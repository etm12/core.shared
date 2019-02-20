import * as S from './index';

describe('Functions', () => {
  runTests([
    [-5, () => S.flip((a, b) => a - b)(5, 0)],
    [[1, 2, 3], () => S.apply((a, b, c) => [a, b, c], [1, 2, 3])],
    ['[object Object]', () => S.invoker0('toString', {})],
    ['this-that', () => S.invoker1('join', '-', ['this', 'that'])],
    [[1, 2], () => S.invoker2('foo', 1, 2, { foo: (a, b) => [a, b] })],
    ['called', () => S.call0(() => 'called')],
  ]);
});
