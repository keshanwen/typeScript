// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

//  infer 关键字，可以看成是声明一个灵活的变量
// type First<T extends any[]> = T extends [infer F] ? F : never
// type First<T> = T extends [infer P, ...infer Rest] ? P : never

type  First<T> = T extends [infer P,...infer Rest] ? P : never


type arr1 = ['a','b','c']
type arr2 = [1,2,3]

type head1 = First<arr1>
type head2 = First<arr2>