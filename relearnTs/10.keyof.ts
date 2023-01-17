// 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

interface Perosn {
    name: string;
    age: number;
    location: string;
}

// type K1 = keyof Perosn // "name" | "age" | "location"
// type K2 = keyof Perosn[] // number | "length" | "push" | "concat" | ...
// type K3 = keyof {
//     [x: string]: Perosn
// } // // string | number

// keyof 也可以用于操作类
// class Perosn {
//     name: string = 'kebi'
// }

// let sname: keyof Perosn;
// sname = 'name'

// 也支持基本数据类型：
let K1: keyof boolean // let K1: "valueOf"
let K2: keyof number // let K2: "toString" | "toFixed" | "toExponential" | ...
let K3: keyof symbol // let K1: "valueOf"

type P1 = Perosn['name'] // string
type P2 = Perosn['name' | 'age'] // string | number
type P3 = string["charAt"] // (pos: number) => string
type P4 = string[]['push'] // (...items: string[]) => number
type P5 = string[][0]   // string


// keyof 的作用

// 首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，
// 然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，
// 最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型。

function Prop<T extends Object, K extends keyof T>(object: T, key: K): T[K] {
    return object[key]
}

type Todo = {
    id: number;
    text: string;
    done: boolean;
  }
  
const todo: Todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
}

const id = Prop(todo,'id')
const text = Prop(todo,'text')
const done = Prop(todo, 'done')

// const age = Prop(todo, 'age') // error

// keyof 与对象的数值属性
// 如果我们定义一个带有数值属性的对象，那么我们既需要定义该属性，又需要使用数组语法访问该属性，
class ClassWithNumericProperty {
    [1]: string = "Semlinker";
  }
  
  let classWithNumeric = new ClassWithNumericProperty();
  console.log(`${classWithNumeric[1]} `);

  enum Currency {
    CNY = 6,
    EUR = 8,
    USD = 10
  }
  
  const CurrencyName = {
    [Currency.CNY]: "人民币",
    [Currency.EUR]: "欧元",
    [Currency.USD]: "美元"
  };
  
  console.log(`CurrencyName[Currency.CNY] = ${CurrencyName[Currency.CNY]}`);  // CurrencyName[Currency.CNY] = 人民币
  console.log(`CurrencyName[6] = ${CurrencyName[6]}`); // CurrencyName[6] = 人民币

  function getCurrencyName<T, K extends keyof T>(key: K, map: T): T[K] {
    return map[key];
  }
  
  console.log(`name = ${getCurrencyName(Currency.CNY, CurrencyName)}`);



  // keyof 与 typeof 操作符
  // typeof 操作符用于获取变量的类型。因此这个操作符的后面接的始终是一个变量，且需要运用到类型定义当中
  type Perosns = {
    name: string;
    age: number;
  }

  let man: Perosns = {
    name: 'kebi',
    age: 18
  }

  type Huma = typeof man

  const COLORS = {
    red: 'red',
    blue: 'blue'
  }

// 首先通过typeof操作符获取color变量的类型，然后通过keyof操作符获取该类型的所有键，
// 即字符串字面量联合类型 'red' | 'blue'
type Colors = keyof typeof COLORS
let color: Colors

color = 'red'
color = 'blue'

// color = 'yellow' // error

interface StringIndexArray {
    [index: string]: string;
  }
  
  interface NumberIndexArray {
    [index: number]: string;
  }
  
  type K1 = keyof StringIndexArray // type K1 = string | number
  type K2 = keyof NumberIndexArray // type K2 = number
