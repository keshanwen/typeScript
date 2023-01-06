// TypeScript	      JavaScript
// 含有类型	          无类型
// 箭头函数	          箭头函数（ES2015）
// 函数类型	          无函数类型
// 必填和可选参数	  所有参数都是可选的
// 默认参数	          默认参数
// 剩余参数	          剩余参数
// 函数重载	          无函数重载


// 参数类型， 返回类型
// function createUserId(name: string, id: number): string {
//     return name + id;
// }

// 函数类型
// let IdGenerator: (chars: string, nums: number) => string;

// function createUserIds(name: string, id: number): string {
//   return name + id;
// }

// IdGenerator = createUserIds;

// 可选参数 默认参数
// function createUserId(name: string, id: number, age?: number):string {
//     return name + id;
// }

  // 默认参数
// function createUserId(
//     name: string = "Semlinker",
//     id: number,
//     age?: number
//   ): string {
//     return name + id;
//   }


// 剩余参数
// function push(array, ...items) {
//     items.forEach(function (item) {
//       array.push(item);
//     });
// }
  
// let a = [];
// push(a, 1, 2, 3);

// 函数重载
// 从上往下匹配，所以应该将最多的放在前面
type Combinable = number | string

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: string, b: number): string;
    add(a: number, b: string): string;
    add(a: Combinable, b: Combinable) {
      if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
      }
      return a + b;
    }
  }
  
  const calculator = new Calculator();
  const result = calculator.add("Semlinker", " Kakuqo");


