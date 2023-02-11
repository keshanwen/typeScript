// 与逻辑或（||）操作符不同，逻辑或会在左操作数为 falsy 值时返回右侧操作数。也就是说，如果你使用 || 来为某些变量设置默认的值时，你可能会遇到意料之外的行为。比如为 falsy 值（''、NaN 或 0）时。


// 空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。

const foo = null ?? "default string";
// console.log(foo);

const baz = 0 ?? 42;
// console.log(baz);

// 当空值合并运算符的左表达式不为 null 或 undefined 时，不会对右表达式进行求值。
function A() {
  console.log("A was called");
  return undefined;
}

function B() {
  console.log("B was called");
  return false;
}

function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C());
console.log(B() ?? C());



// 若空值合并运算符（??）直接与 AND（&&）和 OR（||）操作符组合使用 ?? 是不行的。这种情况下会抛出 SyntaxError 。
// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
(null || undefined) ?? "foo"; // 但当使用括号来显式表明优先级时是可行的


// 空值合并操作符针对 undefined 与 null 这两个值，可选链式操作符（?.） 也是如此。
interface Customer {
  name: string;
  city?: string;
}

let customer: Customer = {
  name: "kebi",
};
let customerCity = customer?.city ?? "Unkown city";

console.log(customerCity, "customerCity~~~~~~~~~~~~~");