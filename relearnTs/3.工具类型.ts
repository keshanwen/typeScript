
// 1. 类型别名
type Pet = 'cat' | 'dog';
let pet: Pet;

pet = 'cat'; // Ok
pet = 'dog'; // Ok
// pet = 'zebra'; // Compiler error

// 2.1 typeof 操作符可以用来获取一个变量声明或对象的类型。

interface Person {
    name: string;
    age: number;
  }
  
const sem: Person = { name: 'semlinker', age: 30 };
type Sem= typeof sem; // -> Person

function toArray(x: number): Array<number> {
return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]

// 2.2 keyof 获取一个对象中的所有key
interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person };  // string | number

// 2.3 in 用来遍历枚举类型：

type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }

// 2.4 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
// 以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。

type myReturnType<T> = T extends (
    ...args: any[]
  ) => infer R ? R : any;

  // 2.5 extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
  interface ILengthwise {
    length: number;
  }
  
  function loggingIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  // 3.1 Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
  type myPartial<T> = {
    [P in keyof T]?: T[P];
  };

// 3.2 Required<T> 的作用就是将某个类型里的属性全部变为必选项。
type myRequired<T> = {
    [P in keyof T]-?: T[P];
};

interface Props {
    a?: number;
    b?: string;
  }
  
// const obj: Props = { a: 5 }; // OK
// const obj2: Required<Props> = { a: 5}; // Error: property 'b' missing


// 3.3 Readonly<T> 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。
type myReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface ReadonlyDemo {
    name: string;
    age: number
}

type Demo = Readonly<ReadonlyDemo>
const demo:Demo = {
    name: 'kebi',
    age: 24
}

// demo.age = 18 // error
// function freeze<T>(obj: T): Readonly<T>;

// 3.4 Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
type myRecord<K extends keyof any, T> = {
    [P in K]: T;
};

interface PageInfo {
    title: string;
  }
  
type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" }
};

// 3.5 Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。
type myPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  
  type TodoPreview = Pick<Todo, "title" | "completed">;
  
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false
  };

// 3.6 Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。
type myExclude<T, U> = T extends U ? never : T;

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number


// 3.7 Extract<T, U> 的作用是从 T 中提取出 U。
type myExtract<T, U> = T extends U ? T : never;

type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () =>void

