interface Example {
    a: string;
    e: number;
    b: string | number;
    c: () => void;
    d: {};
    f: string | number | boolean;
  }
  type ConditionalPick<V, T> = {
    [K in keyof V as V[K] extends T ? K : never]: V[K];
  };
  type StringKeysOnly = ConditionalPick<Example, string | number>;

