/*

实现内置的pick  Pick<T,k>

从类型 T 中选择出属性 K，构造成一个新的类型

*/

interface Todo {
    title: String
    description: String
    completed: boolean
}

// 潜意识： 不要将 js 的 || 或 与 ts 的 | 看成一个概念
type TodoPreview = Pick<Todo,'title' | 'completed'>

const todo:TodoPreview = {
    title: 'hello wrold',
    completed: true
}



type MyPick<T, K extends keyof T = keyof T> = {
    [P in K]: T[P]
}

/*

keyof 取出 key
尖括号的右侧 'title' | 'completed' ，他们是Todo类型的两个key。所以需要用 keyof T 取出
keyof T 等于 'title' | 'completed' | 'description'

extends 对泛型进行约束
'title' | 'completed' 是 'title' | 'completed' | 'description'的子集（keyof T）.
所以 'title' | 'completed' 等于 K extends keyof T。

in 遍历枚举类型
[p in k]的意思是将K中的key 遍历出来，赋予p
T[p] 的意思是将 T 中对应的key === p 取值出来

为什么要加 =keyof T
如果以 MyPick<T> 中形式调用时，T如果没有默认值，会报错.所以需要加上 = Keyof T


*/
type TodoPreviews = MyPick<Todo,'title' | 'completed'>

const todos:TodoPreviews = {
    title: 'hello',
    completed: false
}

type TodoPreviewDefault = MyPick<Todo>

const todoDefault:TodoPreviewDefault = {
    title: 'hello wrold',
    description: 'come on',
    completed: false
}