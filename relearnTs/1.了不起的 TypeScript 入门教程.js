// 一,typescript 基础类型
// 1， boolean 类型
var isDone = false;
// 2，number 类型
var count = 10;
// 3, string 类型
var name1 = 'kebi';
// 4, Array 类型
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 5,Enum 类型
// 5.1 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST"; // 3
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
console.log(dir, 'dir');
// 当然也可以数字NORTH 的初始值
var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 3] = "NORTH";
    Direction1[Direction1["SOUTH"] = 4] = "SOUTH";
    Direction1[Direction1["EAST"] = 5] = "EAST";
    Direction1[Direction1["WEST"] = 6] = "WEST";
})(Direction1 || (Direction1 = {}));
// 5.2 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
var dir1 = Direction2.EAST;
console.log(dir1, 'dir1');
// 5.3 异构枚举 (数字和字符串)
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
var dir2 = Enum.C;
var dir3 = Enum.F;
console.log(dir2, 'dir2');
console.log(dir3, 'dir3');
