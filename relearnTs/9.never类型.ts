// let foo:never;

// never 类型是任何类型的子类型，也可以赋值给任何类型
// let bar: string = (() => {
//   throw new Error('Typescript never');
// })();

// 然而，没有类型是 never 的子类型，就是说除了nevere 本身，不能将其他类型赋值给never类型。即使any 也不可以赋值给 never
// let baz: never = 123; // errro

// 定义never类型变量，接收返回值类型为never类型的函数返回值
// let bars: string = (() => {
//   throw new Error('Typescript never');
// })();


// 对于死循环的函数或执行时总会抛出异常的函数来说，函数对应的返回值类型也是 never 类型

// 返回never的函数必须存在无法达到的终点
// function error(message: string):never {
//   throw new Error(message);
// }

// 推断的返回值类型为never
// function fail() {
//   return error('some error happend');
// }

// 返回never的函数必须存在无法达到的终点
// function infinteLoop():never {
//   while (true) {}
// }


// never 类型的用途
// 可以利用 never 类型的特性来实现详细的检查
type Foo = string | number;

// 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
// function controlFlowAnalysisWithNever(foo: Foo) {
//   if (typeof foo === 'string') {
//     // 这里 foo 被收窄为 string 类型
//   } else if (typeof foo === 'number') {
//     // 这里 foo 被收窄为 number 类型
//   } else {
//     const check: never = foo;
//   }
// }

// never 类型 和 void 类型的区别
// 没有显式返回值的函数会隐式返回 undefined。尽管我们通常说这样的函数 “什么也不返回”，
// 但实际上它是会返回的。在这些情况下，我们通常忽略返回值。在 TypeScript 中这些函数的返回类型被推断为 void。

// 具有 never 返回类型的函数永不返回。它也不返回 undefined。
// 该函数没有正常完成，这意味着它可能会抛出异常或根本无法退出执行。

// never 类型为底部类型，也称为零类型或空类型。
// 它通常表示为⊥，表示计算未将结果返回给调用方。
// void 类型，在另一方面，是一个单元类型（类型，它允许只有一个值），没有定义的操作

// never 类型运算

// 因为 never 类型为底部类型，所以任意类型与 never 交叉都得到 never：
type T1 = never & string // never
type T2 = number & never // never

// 而任意类型与 never 类型联合，则不会影响原有的类型：
type T3 = never | number
type T4 = string | never


