// 1,问题导入 
// res 表示一个复杂的对象，我们把他传给一个函数 fn,但是目前没有办法从形参obj获取提示信息
{

    const res = {
        name: 'kebi',
        age: 18
    }

    function fn(obj) {
        // 这里写obj.没有提示
        console.log(obj.name)
    }

    fn(res)
}

/*

js 中提供了 typeof 操作符，用来在js中获取数据的类型

ts 用来获取变量或属性的类型

*/ 

// 2，使用场景
/*

根据已有变量的值，反向推断出获取该值得类型，来简化类型书写

格式: type 类型 = typeof 常量

*/ 

{
    const res = {
        name: 'kebi',
        age: 18
    }

    type StuType = typeof res

    function fns(obj: StuType) {
        // 这里写obj. 有 name 和 age 的提示了
        console.log(obj.name)
    }

    fn(res)
}

// 3,小结: 
/*
    使用 typeof 操作符来获取变量 res 的类型。注意typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如函数调用类型）

*/

/*
keyof 定义： 获取某个对象/类型的 属性名 来构成新类型

格式：

1，type 类型 = keyof 类型
2，type 类型 = keyof 对象常量

*/

{

    // 第一种： 获取某个类型的属性名构成新的类型
    type Point = {
        x: number
        y: number
    }
    type P = keyof Point
    let p1:P = 'y'
    let p2:P = 'x'

    // 第二种：获取某个对象的属性名称构成新的类型
    type T = keyof {
        a: 1,
        b: 2
    }
    let keyName:T = 'a'
}