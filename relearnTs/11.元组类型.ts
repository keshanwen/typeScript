let tupleType: [number,boolean]
tupleType = [24, false]



// 解构赋值
let employee: [number, string] = [24, 'keibi']
let [id, names] = employee
console.log(id, 'id')
console.log(names, 'name')

// 可选元素
type Point = [number, number?, number?]

let x:Point = [24]
let xy:Point = [24,48]
let xyz: Point = [24,48,96]

// 剩余元素
function useTupleAsRest(...args: [number, string, boolean]) {
  let [arg1, arg2, arg3] = args;
  console.log(`arg1: ${arg1}`);
  console.log(`arg2: ${arg2}`);
  console.log(`arg3: ${arg3}`);
}

useTupleAsRest(1, "Semlinker", true);


// 元组类型展开表达式
type Point3D = [number, number, number];

const drawPoint = (...point3D: Point3D) => {
  console.log(point3D);
};

const xyzCoordinate: Point3D = [10, 20, 30];

// 使用字面量的形式设置值
drawPoint(10, 20, 30);

// 使用索引的方式来访问xyzCoordinate元组中的元素
drawPoint(xyzCoordinate[0], xyzCoordinate[1], xyzCoordinate[2]);

// 使用展开语法来访问xyzCoordinate元组中的元素
drawPoint(...xyzCoordinate);

// 只读元素类型
let point: readonly [number, number] = [10, 20];