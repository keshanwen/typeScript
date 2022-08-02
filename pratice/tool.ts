// 类型别名
type Pet = 'cat' | 'dog'
let pet:Pet

pet = 'cat'
pet = 'dog'
// pet = 'zebra'


/*
    typeof 获取一个变量声明或对象的类型
*/ 
interface Person {
    name: string
    age: number
}

const sem:Person = {
    name: 'kebi',
    age: 18
}

type Sem = typeof sem

function toArray(x:number):Array<number> {
    return [x]
}

type Func = typeof toArray

/*
    keyof 获取一个对象中的所有key
*/ 
type K1 = keyof Person
type K2 = keyof Person[]


/*
    in 遍历枚举

*/ 
type Keys = 'a' | 'b' | 'c'
type Obj = {
    [p in Keys]: any
}

/*

infer 在条件类型语句中，可以用infer声明一个变量对他进行使用

infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后的使用

*/ 
type ReturnTypeOne<T> = T extends (...args: any[]) => infer R ? R : any;


/*

extends 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束

*/ 

interface ILengthwise {
    length: number
}

function logginIdentity<T extends ILengthwise>(arg:T):T {
    console.log(arg.length)

    return arg
} 

logginIdentity('01234')

/*
    Partial 将某个类型里的属性全部变为可选项 ?
*/ 

type Partials<T> = {
    [p in keyof T]?: T[p]
}

interface Todo {
    title: string
    description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partials<Todo>) {
    return {
        ...todo,
        ...fieldsToUpdate
    }
}

const todo1 = {
    title: 'i am title',
    description: 'i am description'
}

const todo2 = updateTodo(todo1,{
    title: 'tile'
})


/*

require 将某个类型里的属性全部变为必选项
-? 移除可选项

*/ 
type requireds<T> = {
    [P in keyof T]-?: T[P]
}

interface Props {
    a?: number
    b?: string
}

const obj: Props = {
    a: 24
}
const obj2: requireds<Props> = {
    a: 24,
    b: 'abc'
}


/*

Readonly 将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值

如果是 -Readonly 就是移除子属性 readonly 标识

*/ 
type Readonlys<T> = {
    readonly [p in keyof T]: T[p]
}

interface todoss {
    title: string
}


/*
Record 将K 中所有的属性得值转换为 T 类型

*/

type Records<K extends keyof any,T> = {
    [p in K]: T
}

interface PageInfo {
    title: string
}

type page = 'home' | 'about' | 'contact'

const x:Records<page,PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' }
}

/*
pick<T, K extends keyof T> 将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型

*/ 

type Picks<T, K extends keyof T> = {
    [p in K]: T[p]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = Pick<Todo,'title' | 'completed'>


const todo: TodoPreview = {
    title: 'tile',
    completed: false
}


/*
Exclude<T,U> 将某个类型中的属于另一个的类型移除掉

*/ 
type Excludes<T,U> = T extends U ? never : T

type T0 = Excludes<'a' | 'b' | 'c','a'>
type T1 = Excludes<'a' | 'b' | 'c','a' | 'b'>
type T2 = Excludes<string | number | ( () => void),Function>


/*
Extract<T,u> 从T 中提取出 U

*/ 
type Extracts<T,U> = T extends U ? T : never
type T3 = Extracts<'a' | 'b' | 'c','a' | 'f'>
type T4 = Extracts<string | number | (() => void),Function>


/*

omit<T, K extnds keyof any> 使用T类型中除了K类型的所有属性，来构造一个新的类型
*/ 

type Omits<T,K extends keyof any> = Pick<T,Excludes<keyof T,K>>

interface Todos {
    title: string
    description: string
    completed: boolean
}

type TodoPreviews = Omits<Todos,'description'>
const todos:TodoPreviews = {
    title: 'tile',
    completed: true
}


/*
    NonNullables 过滤 null undefined
*/
type NonNullables<T> = T extends null | undefined ? never : T
type T5 = NonNullables<string | number | undefined>
type T6 = NonNullables<string[] | null | undefined>


/*

ReturnType 用于返回函数的返回值

*/ 

type ReturnTypes<T extends (...args: any) => any> = T extends (...args:any) => infer R ? R : any

type T7 = ReturnTypes<() => string>
type T8 = ReturnTypes<(s:string) => void>
// type T9 = ReturnTypes<string>


/*

ConstructorParameters<T> 提取构造函数类型的所有参数类型，它会生成具有所有参数类型的元组类型（如果T不是函数，则返回的是 never 类型）
*/ 
type ConstructorParameterss<T extends new (...args:any) => any> = T extends new (...args: infer p) => any ? p : never

type A = ConstructorParameterss<FunctionConstructor>