// 函数重载

type Combinable = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b;
}


// 方法重载
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
const result = calculator.add('hello', 'wrold')


// 构造函数重载
interface Shape {
  x: number;
  y: number;
  height: number;
  width: number;
}

class Square {
  public x: number;
  public y: number;
  public height: number;
  public width: number;

  constructor();
  constructor(obj: Shape);
  constructor(obj?: any) {
    this.x = obj?.x ?? 0;
    this.y = obj?.y ?? 0;
    this.height = obj?.height ?? 0;
    this.width = obj?.width ?? 0;
  }
}

// 1. 无参构造方式
let square1: Square;
square1 = new Square()
square1.x = 10;
square1.y = 50;
square1.height = 100;
square1.width = 100;


// 2. 使用 Shape 类型的对象进行构造
let squareConfig: Shape
squareConfig = { x: 10, y: 50, height: 100, width: 100 };
let square2: Square;
square2 = new Square(squareConfig)

let square3: Square;
square3 = new Square({ x: 10, y: 50, height: 100, width: 100 });

