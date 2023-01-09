// 1. 泛型是什么？ 可以理解为函数参数

// function identity <T, U>(value: T, message: U) : T {
//   console.log(message);
//   return value;
// }

// console.log(identity<Number, string>(68, "Semlinker"));
// 除了为类型变量显式设定值之外，一种更常见的做法是使编译器自动选择这些类型，从而使代码更简洁。我们可以完全省略尖括号
// identity(24, 'kebi')

// 2. 泛型接口
// interface Identities<V, M> {
//   value: V,
//   message: M
// }

// function identity<T, U> (value: T, message: U): Identities<T, U> {
//   console.log(value + ": " + typeof (value));
//   console.log(message + ": " + typeof (message));
//   let identities: Identities<T, U> = {
//     value,
//     message
//   };
//   return identities;
// }

// console.log(identity(68, "Semlinker"));

// 3.泛型类
// 什么时候使用泛型？
// 当你的函数、接口或类将处理多种数据类型时；
// 当函数、接口或类在多个地方使用该数据类型时。
// interface GenericInterface<U> {
//   value: U
//   getIdentity: () => U
// }

// class IdentityClass<T> implements GenericInterface<T> {
//   value: T

//   constructor(value: T) {
//     this.value = value
//   }

//   getIdentity(): T {
//     return this.value
//   }

// }

// const myNumberClass = new IdentityClass<Number>(68);
// console.log(myNumberClass.getIdentity()); // 68

// const myStringClass = new IdentityClass<string>("Semlinker!");
// console.log(myStringClass.getIdentity()); // Semlinker!

// 4. 泛型约束
// 4.1 确保属性存在
// interface Length {
//     length: number;
//   }
  
// function identity<T extends Length>(arg: T): T {
//     console.log(arg.length); // 可以获取length属性
//     return arg;
// }
// 此外，我们还可以使用 , 号来分隔多种约束类型，比如：<T extends Length, Type2, Type3>

// 4.2 检查对象上的键是否存在

// keyof 获取一个对象的所有健，返回的是联合类型
// interface Person {
//     name: string;
//     age: number;
//     location: string;
//   }
  
//   type K1 = keyof Person; // "name" | "age" | "location"
//   type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
//   type K3 = keyof { [x: string]: Person };  // string | number

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// enum Difficulty {
//     Easy,
//     Intermediate,
//     Hard
//   }
  
//   function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
//   }
  
//   let tsInfo = {
//      name: "Typescript",
//      supersetOf: "Javascript",
//      difficulty: Difficulty.Intermediate
//   }
   
//   let difficulty: Difficulty = 
//     getProperty(tsInfo, 'difficulty'); // OK
  
//   let supersetOf: string = 
//     getProperty(tsInfo, 'superset_of'); // Error


// 5. 泛型参数默认类型
// 泛型参数默认类型与普通函数默认值类似，对应的语法很简单，即 <T=Default Type>
// interface A<T=string> {
//     name: T;
//   }
  
//   const strA: A = { name: "Semlinker" };
//   const numB: A<number> = { name: 101 };

// 6.泛型条件类型 
// T extends U ? X : Y 若 T 能够赋值给 U，那么类型是 X，否则为 Y。在条件类型表达式中，我们通常还会结合 infer 关键字，实现类型抽取：
// interface Dictionary<T = any> {
//     [key: string]: T;
//   }
   
//   type StrDict = Dictionary<string>
  
//   type DictMember<T> = T extends Dictionary<infer V> ? V : never
//   type StrDictMember = DictMember<StrDict> // string
  // 在上面中，当类型满足 T extends Dictionary 约束时，我们会使用 infer 关键字声明一个类型变量V，并返回该类型，否则返回never 类型

//   async function stringPromise() {
//     return "Hello, Semlinker!";
//   }
  
//   interface Person {
//     name: string;
//     age: number;
//   }
  
//   async function personPromise() {
//     return { name: "Semlinker", age: 30 } as Person;
//   }
  
//   type PromiseType<T> = (args: any[]) => Promise<T>;
//   type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;
  
//   type extractStringPromise = UnPromisify<typeof stringPromise>; // string
//   type extractPersonPromise = UnPromisify<typeof personPromise>; // Person

// 7. 泛型工具类型
// Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。

// type myPartial<T> = {
//     [P in keyof T]?: T[P];
// };


// Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
// type myRecord<K extends keyof any, T> = {
//     [P in K]: T;
// };

// interface PageInfo {
//     title: string;
//   }
  
//   type Page = "home" | "about" | "contact";
  
//   const x: Record<Page, PageInfo> = {
//     about: { title: "about" },
//     contact: { title: "contact" },
//     home: { title: "home" }
//   };

// Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。

// type myPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//   }
  
//   type TodoPreview = Pick<Todo, "title" | "completed">;
  
//   const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false
//   };

// Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。
// 如果 T 能赋值给 U 类型的话，那么就会返回 never 类型，否则返回 T 类型。最终实现的效果就是将 T 中某些属于 U 的类型移除掉。
// type myExclude<T, U> = T extends U ? never : T;

// type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
// type T2 = Exclude<string | number | (() => void), Function>; // string | number

// ReturnType<T> 的作用是用于获取函数 T 的返回类型。
// type myReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// type T0 = ReturnType<() => string>; // string
// type T1 = ReturnType<(s: string) => void>; // void
// type T2 = ReturnType<<T>() => T>; // {}
// type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
// type T4 = ReturnType<any>; // any
// type T5 = ReturnType<never>; // any
// type T6 = ReturnType<string>; // Error
// type T7 = ReturnType<Function>; // Error


// 8. 使用泛型创建对象
// 8.1 构造签名


