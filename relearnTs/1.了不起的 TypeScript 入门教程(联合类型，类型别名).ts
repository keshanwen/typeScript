// 联合类型

const sayHello = (name: string | null) => {
    console.log(name)
}

sayHello('hello wrold')
sayHello(null)

//  可辨识联合 它包含 3 个要点：可辨识、联合类型和类型守卫。
// 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。

// (1) 可辨识
// 我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。
enum CarTransmission {
    Automatic = 200,
    Manual = 300
  }
  
interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number; // year
}

interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission
}

interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
}

interface Boy {
    name: string
}

// (2) 联合类型
type Vehicle = Motorcycle | Car | Truck;

const EVALUATION_FACTOR = Math.PI; 

// (3) 类型守卫
function evaluatePrice(vehicle: Vehicle) {
    switch(vehicle.vType) {
        case "car":
        return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
        return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
        return vehicle.make * EVALUATION_FACTOR;
    }
}


// 类型别名： 用来给一个类型起一个新名字
type Message = string | string[];

let greet = (message: Message) => {
  // ...
};
