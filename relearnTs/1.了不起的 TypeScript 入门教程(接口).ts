// 对象的形状

// interface Person {
//     name: string;
//     age: number;
// }


// let kebi: Person = {
//     name: 'kebi',
//     age: 18
// }

// 可选，只读属性
interface Perosn {
    readonly name: string;
    age?: number;
}

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100 // error
// a = ro // error
