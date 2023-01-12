// 1.联合类型
// 当我们使用联合类型时，我们必须尽量把当前值的类型收窄为当前值的实际类型，而类型保护就是实现类型收窄的一种手段。
let stringOrBoolean: string | boolean = "Semlinker";

interface Cat {
  numberOfLives: number;
}

interface Dog {
  isAGoodBoy: boolean;
}

let animal: Cat | Dog;

// 2.类型保护
// 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
// 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
// 类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。
// 目前主要有四种的方式来实现类型保护：

// 2.1 in 关键字
interface Admin {
    name: string;
    privileges: string[];
}
  
interface Employee {
    name: string;
    startDate: Date;
}
  
type UnknownEmployee = Employee | Admin;
  
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges"in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate"in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}


// 2.2 typeof 关键字 只能检测基本类型
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// 2.3 instanceof
interface Padder {
    getPaddingString(): string;
  }
  
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
  
  class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
      return this.value;
    }
  }
  
  let padder: Padder = new SpaceRepeatingPadder(6);
  
  if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
  }


// 2.4 自定义类型保护的类型谓词（type predicate）

function isNumber(x: any): x is number {
    return typeof x === "number";
  }
  
function isString(x: any): x is string {
    return typeof x === "string";
}


// 类型谓词
interface Vehicle {
    move: (distance: number) =>void;
  }
  
class Car implements Vehicle {
    move = (distance: number) => {
        // Move car…
    };

    turnSteeringWheel = (direction: string) => {
        // Turn wheel…
    };
}
  
  class VehicleController {
    vehicle: Vehicle;
    constructor(vehicle: Vehicle) {
      this.vehicle = vehicle;
    }
  }
  
  const car = new Car();
  const vehicleController = new VehicleController(car);
  
  const { vehicle } = vehicleController;
  // vehicle.turnSteeringWheel('left');

  if(vehicle instanceof Car) {
    vehicle.turnSteeringWheel('left');
 }


function isCar(vehicle: any): vehicle is Car {
    return (vehicle as Car).turnSteeringWheel !== undefined;
}


// 在 isCar 函数的方法体中，我们不仅要检查 vehicle 变量是否含有 turnSteeringWheel 属性，
// 而且还要告诉 TS 编译器，如果上述逻辑语句的返回结果是 true，那么当前判断的 vehicle 变量值的类型是 Car 类型。

if (isCar(vehicle)) {
    vehicle.turnSteeringWheel('left');
    console.log("这是一辆车");
  } else {
    console.log("这不是一辆车");
  }

  // 自定义类型保护的主要特点
  // 返回类型谓词，如 vehicle is Car；
  // 包含可以准确确定给定变量类型的逻辑语句，如 (vehicle as Car).turnSteeringWheel !== undefined。

  function isOfType<T>(
    varToBeChecked: any,
    propertyToCheckFor: keyof T
  ): varToBeChecked is T {
    return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
  }

//   function isOfType<T>(
//     varToBeChecked: any,
//     propertyToCheckFor: keyof T
//   ): varToBeChecked is T {
//     return (<T>varToBeChecked)[propertyToCheckFor] !== undefined;
//   }


  if (isOfType<Car>(vehicle, 'turnSteeringWheel')) {
    vehicle.turnSteeringWheel('left');
    console.log("这是一辆车");
  } else {
    console.log("这不是一辆车");
  }

  