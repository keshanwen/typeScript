// keyof 与 Object.keys 稍有相似，只是 keyof 采用了接口的键。
interface Point {
    x: number
    y: number
  }
  
  // type keys = 'x' | 'y'
  // type keys = keyof Point
  
  function get<T extends object, K extends keyof T>(o: T,name: K):T[K] {
    return o[name]
  }


  // 必填&部分&选择
type MyPartial<T> = {
    [p in keyof T]?: T[p]
  }
  
  type MyRequired<T> = {
    [p in keyof T]-?: T[p]
  }
  
  type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
  }
  
  interface User {
    id: number;
    age: number;
    name: string;
  }
  
  type ParticalUser = MyPartial<User>
  type PickUser = MyPick<User, 'id' | 'age'>


  // 条件类型
// T extends U ? x : y

type isTure<T> = T extends true ? true : false
type t = isTure<number>



// .never & Exclude & Omit
// never 表示从不出现的类型

type MyExclude<T,U> = T extends U ? never : T

// Equivalent to: type A = 'a'
type A = MyExclude<'x' | 'a','x' | 'y' | 'z'>

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

interface User {
  id: number;
  age: number;
  name: string;
};

// Equivalent to: type PickUser = { age: number; name: string; }
type OmitUser = MyOmit<User, 'id'>


// typeof typeof代表一个取一定值的类型
const a: number = 3
// Equivalent to: const b: number = 4
const b: typeof a = 4

// import logger from './logger'
// import utils from './utils'

// interface Context extends KoaContect {
//   logger: typeof logger,
//   utils: typeof utils
// }

// app.use((ctx: Context) => {
//   ctx.logger.info('hello, world')

//   // will return an error because this method is not exposed in logger.ts, which minimizes spelling errors
//   ctx.loger.info('hello, world')
// })


// is
function isString(value: any): value is string {
    let isstring = typeof value
    return isstring === 'string'
}

// type 与 interface 的区别,
interface D {
    name: string
  }
  
  type DD = {
    name: string
  }
  
  // interface可以如下合并，而type只能使用 & 类链接。
  interface AB {
      a: number;
  }
  
  interface AB {
      b: number;
  }
  
  const ab: AB = {
      a: 3,
      b: 4
  }
  
  type c = {
    a: number
  }
  
  type d = {
    b: number
  }
  
  type E = c & d
  
  let e:E = {
    a: 24,
    b: 18,
  }
  
  type MyRecord<K extends keyof any, T> = {
    [p in K]: T;
  }
  
//   type Record<K extends keyof any, T> = {
//       [P in K]: T;
//   };
  
  interface Dictionary<T> {
    [index: string]: T;
  };
  
  interface NumericDictionary<T> {
    [index: number]: T;
  };
  
  const data:Dictionary<number> = {
    a: 3,
    b: 4
  }
  
  type AA = 'a' | 'b'
  interface Obj {
    name: string
    age: number
  }
  
  type MyObj = MyRecord<AA,Obj>
  
  interface Dictionarys<T> {
    [index: string]: T
  }
  
  interface NumberDictionary<T> {
    [index: number]: T;
  }
  
  // 用 const enum 维护 const 表
  
  // Use objects to maintain consts
  // const TODO_STATUS {
  //   TODO: 'TODO',
  //   DONE: 'DONE',
  //   DOING: 'DOING'
  // }
  
  // Maintaining constants with const enum
  const enum TODO_STATUS {
    TODO = 'TODO',
    DONE = 'DONE',
    DOING = 'DOING'
  }
  type Todo = 'TODO' | 'DONE' | 'DOING'
  
  function todos (status: TODO_STATUS): Todo[] {
    return [status]
  }
  
  todos(TODO_STATUS.TODO)