/*

在 extends 语句中,infer关键字，可以推断一个类型变量，高效的对类型进行匹配。但是这个类型变量只能在true分支中使用

*/ 

type MyReturnType<T> = T extends (...args:any[]) => infer R ? R : any

/*
infer X 就相当于声明了一个变量，这个变量随后可以使用，是不是有点像 for 循环里面的声明语句

for ( let i = 0, len = arr.length; i < len; i++) {
    // do something
}

不同的是，infer X 的这个位置本应该有一个写死的类型变量，只不过用 infer R 替换了，更灵活

需要注意的是infer声明的这个变量只能在 true 分支中使用

*/ 

type Func<T> = T extends () => infer R ? R : boolean

let func1:Func<number>
let func2:Func<''>
let func3:Func<() => Promise<number>>

type Obj<T> = T extends {a: infer VType,b: infer VType } ? VType : number

let obj1:Obj<string>
let obj2:Obj<true>
let obj3:Obj<{a: number,b: number}>
let obj4:Obj<{a: number,b: () => void}>


