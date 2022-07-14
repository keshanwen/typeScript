type Length<T extends readonly any[]> = T['length']


type Test1 = [0,1,2,3,4,5,6]
type Test2 = ['a','b','c','d','e','f']

type Test1Length = Length<Test1>
type TestsLength = Length<Test2>


