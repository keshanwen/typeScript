type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}

type SetOptional<T, K extends keyof T> = 
  Simplify<Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>


// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }

type SetRequired<T, K extends keyof T> = Simplify<Pick<T, Exclude<keyof T, K>> & Required<Pick<T, K>>>

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }