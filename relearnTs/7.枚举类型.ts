
// 一. 数字枚举

// enum RequestMethod {
//     Get,
//     Post,
//     Put,
//     Delete,
//     Options,
//     Head,
//     Patch
// }

// 编译后生成的
// var RequestMethod;
// (function (RequestMethod) {
//   RequestMethod[RequestMethod.Get = 0] = 'Get';
//   RequestMethod[RequestMethod.Post = 1] = 'Post';
//   // .................
// }(RequestMethod || (RequestMethod = {})));

// let requestMethod = RequestMethod.Get;
// console.log(requestMethod); // 0
// console.log(RequestMethod[0]); // 'Get' 数字枚举可以反向映射

// enum RequestMethod {
//   Get = 6,
//   Post,
//   Put,
//   Delete,
//   Options,
//   Head,
//   Patch
// }

// enum RequestMethod {
//   Get,
//   Post,
//   Put,
//   Delete = 8,
//   Options,
//   Head,
//   Patch
// }

// 合并不同文件中定义的相同名称
// a.ts
// enum RequestMethod {
//   Get,
//   Post,
//   Put
// }

// b.ts
// enum RequestMethod {
//   Delete = 8,
//   Options,
//   Head,
//   Patch
// }

// 二. 字符串枚举

enum MediaTypes {
    JSON =  'application/JSON',
    XML = 'application/XML'
}

// 编译后生成的
// (function (MediaTypes) {
//   MediaTypes["JSON"] = 'application/JSON';
//    MediaTypes["XML"] = 'application/XML';
// }(MediaTypes || (MediaTypes = {})));


// 可以通过键的值来解析值，但是不能通过键的值来解析键：
console.log(MediaTypes.JSON) // // 'application/JSON'
// console.log(MediaTypes['application/JSON']); // undefied


// 而对于数字枚举来说，数字枚举可以实现反向映射
enum DefaultPorts {
    HTTP = 80,
    HTPPS = 443
}

console.log(DefaultPorts.HTPPS)
console.log(DefaultPorts[80])


// 三. const 枚举
// 大多数情况下，枚举是十分有效的方案，然而在某些情况下需求很严格。为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问

const enum RequestMethod {
    Get,
    Post,
    Put,
    Delete,
    Options,
    Head,
    Patch
  }

let methods = [RequestMethod.Get, RequestMethod.Post, RequestMethod.Put];


// 以上代码经编译后生成的 ES5 代码如下
// let methods = [0/* Get */, 1/* Post */, 2/* Put */];
// 很明显使用 const 修饰符后，编译器将不会为我们的 RequestMethod 枚举生成任何映射代码。
// 相反，它将在所有使用的地方，内联每个枚举成员的值，从而可能节省一些字节和属性访问间接性的开销。