// 可辨识 在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。
// enum CarTransmission {
//   Automatic = 200,
//   Manual = 300,
// }

// interface Motorcycle {
//   vType: "motorcycle"; // discriminant
//   make: number; // year
// }

// interface Car {
//   vType: "car"; // discriminant
//   transmission: CarTransmission;
// }

// interface Truck {
//   vType: "truck"; // discriminant
//   capacity: number; // in tons
// }

// // 联合类型
// type Vehicle = Motorcycle | Car | Truck;

// // 类型守卫
// const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle) {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }

// const myTruck: Truck = { vType: "truck", capacity: 9.5 };
// evaluatePrice(myTruck);

// function evaluatePrice(vehicle: Vehicle) {
//   switch (vehicle.vType) {
//     case "car":
//       return vehicle.transmission * EVALUATION_FACTOR;
//     case "truck":
//       return vehicle.capacity * EVALUATION_FACTOR;
//     case "motorcycle":
//       return vehicle.make * EVALUATION_FACTOR;
//   }
// }

// 穷举检查
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission;
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}

interface Bicycle {
  vType: "bicycle";
  make: number;
}

// 联合类型
type Vehicle = Motorcycle | Car | Truck | Bicycle;

// 类型守卫
const EVALUATION_FACTOR = Math.PI;

function evaluatePrice(vehicle: Vehicle) {
  switch (vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
    case "bicycle":
      return vehicle.make * EVALUATION_FACTOR;
    default:
      const invalidVehicle: never = vehicle;
      throw new Error(`Unknown vehicle: ${invalidVehicle}`);
  }
}