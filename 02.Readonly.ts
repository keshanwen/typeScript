interface Todo {
    title: string
    description: string
}

const todo:Readonly<Todo> = {
    title: 'hello wrold',
    description: 'i am new wrold'
}

// todo.title = 'edit title'

/*
    使用 readonly 关键字声明属性只是只读属性
    使用 keyof T 取出泛型 T 中的所有 Key,再用 in 遍历
*/
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

const todos:MyReadonly<Todo> = {
    title: 'new wrold',
    description: 'i am description'
}

// todos.title = 'edit title'