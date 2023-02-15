// 未使用 this 参数
// class Rectangle {
//   private w: number;
//   private h: number;

//   constructor(w: number, h: number) {
//     this.w = w;
//     this.h = h;
//   }

//   getArea() {
//     return () => {
//       return this.w * this.h;
//     };
//   }
// }

// 使用 this 参数
// class Rectangle {
//   private w: number;
//   private h: number;

//   constructor(w: number, h: number) {
//     this.w = w;
//     this.h = h;
//   }

//   getArea(this: Rectangle) {
//     return () => {
//       return this.w * this.h;
//     };
//   }
// }

// 禁止使用 this
// class Rectangle {
//   private w: number;
//   private h: number;

//   constructor(w: number, h: number) {
//     this.w = w;
//     this.h = h;
//   }

//   getArea(this: void) {
//     return () => {
//       return this.w * this.h;
//     };
//   }
// }

// 回调函数中 this
/*
const button = document.querySelector("button");
// ?. -> TS 3.7引入的可选链
button?.addEventListener("click", handleClick);

function handleClick() {
  console.log("Clicked!");
  // 'this' implicitly has type 'any' because it does not have a type annotation.
  this.removeEventListener("click", handleClick);
}
*/

/*
const button = document.querySelector("button");
button?.addEventListener("click", handleClick);

function handleClick(this: HTMLElement) {
  console.log("Clicked!");
  this.removeEventListener("click", handleClick);
}

*/