//泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
} 

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 24;
myGenericNumber.add = function(x,y) {
    return x + y
}

// 泛型变量
// 对刚接触 TypeScript 泛型的小伙伴来说，看到 T 和 E，还有 K 和 V 这些泛型变量时，估计会一脸懵逼。
// 其实这些大写字母并没有什么本质的区别，只不过是一个约定好的规范而已。
// 也就是说使用大写字母 A-Z 定义的类型变量都属于泛型，把 T 换成 A，也是一样的。
// 下面我们介绍一下一些常见泛型变量代表的意思：

// T(Type): 表示一个 TypeScript 类型
// K(key): 表示对象中的健类型
// V(Value)： 表示对象中的值类型
// E(Element): 表示元素类型

// 泛型工具类型
// typeOf 来获取一个变量声明或对象的类型。

interface Person {
    name: string;
    age: number;
}

const sem: Person = {
    name: 'sem',
    age: 18
}

type Sem = typeof sem // Person


function toArray(x: number):Array<number> {
    return [x]
}

type Func = typeof toArray // (x: number) => number[]

// keyof 用来获取一个对象中所有 key 值
type K1 = keyof Person // "name" | 'age
type K2 = keyof Person[] // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof {
    [x: string]: Person
} // // string | number


// in 用来遍历枚举类型：
type Keys = 'a' | 'b' | 'c';
type Obj = {
    [p in Keys]: any
}

// infer 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
// 以下代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
type myReturnType<T> = T extends (
    ...args: any[]
  ) => infer R ? R : any;


  // extends 
  // 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
  interface ILengthwise {
    length: number;
  }
  
  function loggingIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }


 // Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
 type myPartial<T> = {
    [P in keyof T]?: T[P];
  };

  interface Todo {
    title: string;
    description: string;
  }
  
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
  
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
  
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });
