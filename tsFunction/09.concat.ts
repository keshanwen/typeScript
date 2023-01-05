
/*
    用 extends 限制 T U 为数组类型
*/ 
type Concat<T extends any[], U extends any[] > = [...T, ...U];

type Result = Concat<[1], [2]> // expected to be [1, 2]


