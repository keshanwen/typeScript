// 添加 null undefined 到类型中
// type StreamVlaue = null | string;

// interface InputStream {
//   getNextLine(): StreamVlaue;
// }

// function countComments(is: InputStream) {
//   let commentCount = 0;
//   while (true) {
//     const line = is.getNextLine();
//     if (line.startsWith("#")) {
//       // (A)
//       commentCount++;
//     }
//     if (line === null) break;
//   }
//   return commentCount;
// }

// function countComments(is: InputStream) {
//   let commentCount = 0;
//   while (true) {
//     const line = is.getNextLine();
//     if (line === null) break; // 判断为null，则跳出循环
//     if (line.startsWith("#")) {
//       // (A)
//       commentCount++;
//     }
//   }
//   return commentCount;
// }

// 添加 symboal 到类型中
// const EOF = Symbol();
// type StreamVlaue = typeof EOF | string;

// interface InputStream<T> {
//   getNextValue(): T;
// }

// 可辨识联合类型
// interface NormalValue<T> {
//   type: "normal";
//   data: T;
// }

// interface Eof {
//   type: "eof";
// }

// type InputStreamVlue<T> = Eof | NormalValue<T>;

// interface InputStream<T> {
//   getNextValue(): InputStreamVlue<T>;
// }

// function countValues<T>(is: InputStream<T>, data: T) {
//   let valueCount = 0;
//   while (true) {
//     const value = is.getNextValue();
//     if (value.type === "eof") break;
//     if (value.data === data) {
//       valueCount++;
//     }
//   }
//   return valueCount;
// }

// 迭代器的结果
// interface IteratorYieldResult<TYield> {
//   done?: false;
//   value: TYield;
// }

// interface IteratorReturnResult<TReturn> {
//   done: true;
//   value: TReturn;
// }

// type IteratorResult<T, TReturn = any> =
//   | IteratorYieldResult<T>
//   | IteratorReturnResult<TReturn>;

// 其他类型的联合
// interface A {
//   one: number;
//   two: number;
// }

// interface B {
//   three: number;
//   four: number;
// }

// type Union = A | B;

// function func(x: Union) {
//   //@ts-ignore: Property 'two' does not exist on type 'Union'.
//   //  Property 'two' does not exist on type 'B'.(2339)
//   console.log(x.two);
//   if ("one" in x) {
//     console.log(x.two); // OK
//   }
// }

type Union = [string] | number;

function logHexValue(x: Union) {
  if (Array.isArray(x)) {
    console.log(x[0]); // OK
  } else {
    console.log(x.toString(16)); // OK
  }
}