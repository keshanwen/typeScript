interface IPperson {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type Staff = IPperson & IWorker

const staff:Staff = {
    id: '18',
    age: 18,
    companyId: 'kebi'
}

// 要是有相同的属性，且是基础类型
interface A {
    name: string;
    id: number;
}

interface B {
    name: number;
    age: number
}

type AB = A & B

// const ab:AB = {
//     // name: 24, // error 因为 name: string name: number ======> 导致 name 成了 never 类型
//     //  name: '24',
//     age: 24,
//     id: 24
// }


// 如果是对象
interface C {
    name: { id: number }
}

interface D {
    name: { age: string }
}

type CD = C & D
const cd: CD = {
    name: {
        id: 24,
        age: '24'
    }
}


interface BaseConfig<T>  {
    name: string;
    id: number;
    like?: string;
    books: string[];
    eat?: () => T
}

type AConfig<T> = BaseConfig<T> & {
  require: false;
  value: T 
}

type BConfig<T> = BaseConfig<T> & {
    require: true;
    value?: T
}