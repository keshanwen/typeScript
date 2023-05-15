// 内联形式与引用形式属于不同的上下文环境

/*
type Language = 'JavaScript' | 'TypeScript' | 'Python';

function setLanguage(language: Language) {
  console.log(language);
}


setLanguage('JavaScript'); // OK，内联形式
*/

// let language = 'JavaScript';
// setLanguage(language); // Error，引用形式, 因为这里 language 变量被推断成 string 类型

// let language: Language = 'JavaScript';
// setLanguage(language);

// const language = 'JavaScript';
// setLanguage(language); // Error，引用形式

// 元组类型
// 参数是（经度，纬度）对
// function panTo(location: [number, number]) {
//   console.log("latitude: " + location[0]);
//   console.log("longitude: " + location[1]);
// }

// panTo([10, 20]); // OK，(A)

// const loc = [10, 20];
// panTo(loc); // Error，(B)

// const loc: [number, number] = [10, 20];
// panTo(loc); // OK


/*
function panTo(location: [number, number]) {
  console.log("latitude: " + location[0]);
  console.log("longitude: " + location[1]);
}

const loc = [10, 20] as const; // (A)
panTo(loc); // Error
*/

/*
function panTo(location: readonly [number, number]) {
  console.log("latitude: " + location[0]);
  console.log("longitude: " + location[1]);
}

const loc = [10, 20] as const; // (A)
panTo(loc);
*/

/*
function panTo(location: readonly [number, number]) {
  console.log("latitude: " + location[0]);
  console.log("longitude: " + location[1]);
}

const loc = [10, 20, 30] as const; // 错误发生点
panTo(loc); // Error
*/

// 对象
type Language = "JavaScript" | "TypeScript" | "Python";

interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) {
  /* ... */
}

complain({ language: "TypeScript", organization: "Microsoft" }); // OK

// const ts = {
//   language: "TypeScript",
//   organization: "Microsoft",
// };

// complain(ts); // Error

// const ts: GovernedLanguage = {
//   language: "TypeScript",
//   organization: "Microsoft",
// };

// complain(ts); // OK

const ts = {
  language: "TypeScript",
  organization: "Microsoft",
} as const;

complain(ts); // OK

// 回调函数
// function callWithRandomNumbers(fn:
//   (n1: number, n2: number) => void) {
//     fn(Math.random(), Math.random());
// }

// callWithRandomNumbers((a, b) => {
//   a; // Type is number
//   b; // Type is number
//   console.log(a + b);
// });

function callWithRandomNumbers(fn:
  (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}

// const fn = (a, b) => {
//   // Parameter 'a' implicitly has an 'any' type.(7006)
//   // Parameter 'b' implicitly has an 'any' type.(7006)
//   console.log(a + b);
// }

// callWithRandomNumbers(fn);

// const fn = (a: number, b: number) => {
//   console.log(a + b);
// }

// callWithRandomNumbers(fn);

const fn: (n1: number, n2: number) => void  = (a, b) => {
  console.log(a + b);
}

callWithRandomNumbers(fn);