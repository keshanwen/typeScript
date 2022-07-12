type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla','model 3','model x','model Y'] as const

type result = TupleToObject<typeof tuple>

// T[number] 是什么？
type Flatten<T> = T extends any[] ? T[number] : T


type Str = Flatten<string[]> // string
type Num = Flatten<number>  // number

/*
    泛型T是数组，数组以number为索引，所以T[number]对应数组中的每个值
*/ 

/*

[p in T[number]],也就是遍历泛型数组 T 中的每个值

*/ 