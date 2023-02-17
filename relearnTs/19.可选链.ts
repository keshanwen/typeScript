// 有了可选链后，我们编写代码时如果遇到 null 或 undefined 就可以立即停止某些表达式的运行。可选链的核心是新的 ?. 运算符，它支持以下语法：
/*

  obj?.prop
  obj?.[expr]
  arr?.[index]
  func?.(args)

*/

const apiResult = {
  code: 200,
  data: {
    name: "Semlinker",
    age: 30
  }
}

const province = apiResult?.data?.address?.province;

// ?. 与 && 的区别
// && 专门用于检测 falsy 值，比如空字符串、0、NaN、null 和 false 等。而 ?. 只会验证对象是否为 null 或 undefined，对于 0 或空字符串来说，并不会出现 "短路"。

// 可选元素访问

function getElement<T>(arr?: T[], index: number = 0) {
  return arr?.[index]
}

/*编译后的代码
function tryGetArrayElement(arr, index) {
    if (index === void0) { index = 0; }
    return arr === null || arr === void0 ? void0 : arr[index];
}
tryGetArrayElement 方法中会自动检测输入参数 arr 的值是否为 null 和 undefined，从而保证了我们代码的健壮性

*/

const obj = {}
// 可选链与函数调用
let result = obj.customMethod?.();

/*
编译后的代码
var result = (_a = obj.customMethod) === null
  || _a === void0 ? void0 : _a.call(obj);

*/