// 类型提取
// type Person = {
//   name: string;
//   age: number;
// };

// type PersonName = Person["name"];
// type StrNumTuple = [string, number];
// type StrNumTuple0 = StrNumTuple[0];
// type NumArr = number[];
// type NUmArrMember = NumArr[0];

// interface Persons {
//   name: string;
//   age: number;
// }
// type PersonsName = Persons["name"];

// 从泛型和函数中提取类型
// interface Dictionary<T = any> {
//   [key: string]: T;
// }
// type StrDict = Dictionary<string>;
// type StrDictMember = StrDict[""];

// 条件类型 infer
// type DictMember<T> = T extends Dictionary<infer V> ? V : never;
// type StrDictMember = DictMember<StrDict>;

// T extends U ? X : Y 若 T 能够赋值给 U，那么类型是 X，否则为 Y
// 但在 T extends Dictionary<infer V> ? V : never 条件表达式中却多了一个 infer 关键字。在条件类型表达式中，我们可以用 infer 声明一个类型变量并且对它进行使用。

// async function stringPromise() {
//   return "Hello, Semlinker!";
// }

// interface Person {
//   name: string;
//   age: number;
// }

// async function personPromise() {
//   return { name: "Semlinker", age: 30 } as Person;
// }

// type PromiseType<T> = (args: any[]) => Promise<T>;
// type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

// type extractStringPromise = UnPromisify<typeof stringPromise>; // string
// type extractPersonPromise = UnPromisify<typeof personPromise>; // Person

type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T>() => T>; // {}
// type T3 = ReturnType<<T extends U, U extendsnumber[]>() => T>; // number[]
type T4 = ReturnType<any>; // any
type T5 = ReturnType<never>; // any

// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = ReturnType<string>; // Error
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T7 = ReturnType<Function>; // Error

// type MyReturnType<T extends (...args: any) => any> = T
//   extends (...args: any) => infer R ? R : any;

type MyReturnTypes<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// type Fn1 = (a: number) => string;
// type ArgType<T> = T extends (a: infer U) => any ? U : never;

// type Fn1Arg = ArgType<Fn1>; // number

// type VariadicFn<A extends any[]> = (...args: A) => any;
// type ArgsType<T> = T extends VariadicFn<infer A> ? A : never;

// type Fn2 = (a: number, b: string) => string;
// type Fn2Args = ArgsType<Fn2>; // [number, string]

// type VariadicFn<A extends any[]> = (...args: A) => any;
// type ArgsType<T> = T extends VariadicFn<infer A> ? A : never;

// type Fn2 = (a: number, b: string) => string;
// type Fn2Args = ArgsType<Fn2>;

type extractArrayType<T> = T extends (infer U)[] ? U : never;
let stringType: extractArrayType<["test"]> = "test";

// Type '"test"' is not assignable to type 'never'.
// let stringTypeNoArray: extractArrayType<"test"> = "test"; // Error

type InferredAb<T> = T extends { a: infer U; b: infer U } ? U : T;
type abInferredNumber = InferredAb<{ a: number; b: number }>;
let abinf: abInferredNumber = 1;

type abInferredNumberString = InferredAb<{ a: number; b: string }>;
let abinfstr: abInferredNumberString = 1;
abinfstr = "test";