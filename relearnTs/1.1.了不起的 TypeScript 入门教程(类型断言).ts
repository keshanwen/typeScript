// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
// 类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。


// 1, “尖括号” 语法

let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length

// 2, as 语法

let someValue1: any = "this is a string"
let strLength1: number = (someValue1 as string).length