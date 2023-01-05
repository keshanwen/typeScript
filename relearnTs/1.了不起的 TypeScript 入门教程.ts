// 一,typescript 基础类型
// 1， boolean 类型
let isDone: boolean = false

// 2，number 类型
let count: number = 10

// 3, string 类型
let name1: string = 'kebi'

// 4, Array 类型
let list: number[] = [1,2,3]
let list1: Array<number> = [1,2,3] 

// 5,Enum 类型
// 5.1 数字枚举
enum Direction {
    NORTH, // 0
    SOUTH, // 1
    EAST, // 2
    WEST // 3
}

let dir: Direction = Direction.NORTH

// 当然也可以数字NORTH 的初始值
enum Direction1 {
    NORTH = 3, // 3
    SOUTH,  // 4
    EAST, // 5
    WEST  // 6
}

// 5.2 字符串枚举
enum Direction2 {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST'
}

const dir1: Direction2 = Direction2.EAST
console.log(dir1, 'dir1')


// 5.3 异构枚举 (数字和字符串)
enum Enum {
    A,
    B,
    C = 'C',
    D = 'D',
    E = 8,
    F
}

const dir2:Enum = Enum.C
const dir3:Enum = Enum.F

// 6, Any 类型 任何类型都可以被归为 any 类型
let notSure: any = 666
notSure = 'kebi'
notSure = false

// let value: any // ok
// value.foo.bar // ok
// value.trim() // ok
// value() // ok
// new value() // ok
// value[0][1] // ok

name1 = notSure

// 为了解决 any
// 7, Unknown 类型 所有类型也都可以赋值给 unknown
 // 但是，当我们尝试将类型为 unknown 的值赋值给其他类型的变量时会发生什么？
 // unknown 类型只能被赋值给 any 类型和 unknown 类型本身

 let value1: unknown
//  value1 = true
//  value1 = 42
//  value1 = []
//  value1 = {}
//  value1 = null
//  value1 = undefined
//  value1 = Symbol

 let value3: any = value1
//  let value4: boolean = value1 // error
// let value5: number = value1 // error
// let value6: string = value1 // error
// let value7: any[] = value1 // error
// let value8: object = value1 // error
// let value9: Function = value1 // error

// value1.foo.bar // error
// value1.trim() // error
// value1() // error
// value1[0][1] // error

// 8. Tuple 类型 元组可用于定义具有有限数量的未命名属性的类型。每个属性都有一个关联的类型。

let tupleType: [string, number]
tupleType = ['kebi', 24]

// 9. Void 类型 
// 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void：

function test(): void {

}

// 需要注意的是，声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null：
let voidValue: void = undefined

// 10. null 类型 和 undefined 类型
// 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
// 然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。
let n: null = null
let u: undefined = undefined

// 11. never 类型 
// never 类型表示的是那些永不存在的值的类型。 
// 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
  }
  
function infiniteLoop(): never {
    while (true) {}
}
// 可以利用 never 类型的特性来实现全面性检查

type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}


