import { Stream, Property } from 'kefir';

declare let S: S.Static;

declare namespace S {
  type Pair<T0, T1> = [T0, T1];
  type Position = Pair<number, number>;
  type PositionIx = { start: number, end: number };

  type Ary0Fn<R> = () => R;
  type Ary1Fn<T1, R> = (t1: T1) => R;
  type Ary2Fn<T1, T2, R> = (t1: T1, t2: T2) => R;
  type Ary3Fn<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
  type Ary4Fn<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;

  interface CurriedGuardAry2<T1, T2, R extends T2> {
    (t1: T1): (t2: T2) => t2 is R;
    (t1: T1, t2: T2): t2 is R;
  }

  interface CurriedGuardAry3<T1, T2, T3, R extends T3> {
    (t1: T1): CurriedGuardAry2<T2, T3, R>;
    (t1: T1, t2: T2): (t3: T3) => t3 is R;
    (t1: T1, t2: T2, t3: T3): t3 is R;
  }

  interface CurriedAry2<T1, T2, R> {
    (t1: T1): (t2: T2) => R;
    (t1: T1, t2: T2): R;
  }

  interface CurriedAry3<T1, T2, T3, R> {
    (t1: T1): CurriedAry2<T2, R>;
    (t1: T1, t2: T2): (t3: T3) => R;
    (t1: T1, t2: T2, t3: T3): R;
  }

  interface Static {
    flip<T1, T2, R>(fn: Ary2Fn<T1, T2, R>, t2: T2, t1: T1): R;
    flip<T1, T2, R>(fn: Ary2Fn<T1, T2, R>, t2: T2): (t1: T1) => R;
    flip<T1, T2, R>(fn: Ary2Fn<T1, T2, R>): (t2: T2) => (t1: T1) => R;

    invoker0<R>(m: string, f: Function): R;

    invoker1<T1, R>(m: string, x: T1, f: Ary1Fn<T1, R>): R;
    invoker1<T1, R>(m: string, x: T1): (f: Ary1Fn<T1, R>) => R;
    invoker1<T1, R>(m: string): CurriedAry2<T2, R>;

    invoker2<T1, T2, R>(m: string, t1: T1, t2: T2, f: Ary2Fn<T1, T2, R>): R;
    invoker2<T1, T2, R>(m: string, t1: T1, t2: T2): (f: Ary2Fn<T1, T2, R>) => R;
    invoker2<T1, T2, R>(m: string, t1: T1): CurriedAry2<T2, R>;
    invoker2<T1, T2, R>(m: string): CurriedAry3<T1, T2, R>;

    persist(e: Event): void;

    computeIx(x: number, y: number, w: number, m: number): number;
    computeIx(x: number, y: number, w: number): (m: number) => number;
    computeIx(x: number, y: number): CurriedAry2<number, number, number>;
    computeIx(x: number): CurriedAry3<number, number, number, number>;

    getIxRange(x: number, y: number, w: number, m: number): Pair<number, number>;
    getIxRange(x: number, y: number, w: number): (m: number) => Pair<number, number>;
    getIxRange(x: number, y: number): CurriedAry2<number, number, Pair<number, number>>;
    getIxRange(x: number): CurriedAry3<number, number, number, Pair<number, number>>;
  }
}

export = S;
export as namespace S;
