type MyExclude<T,U> = T extends U ? never : T

type All = 'a' | 'b' | 'c' | 'd' 
type Some = 'a' | 'f' | 'g'

type Result = MyExclude<Some,All>