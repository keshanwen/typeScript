 
/*
先用条件推断，泛型是否是Promise返回，并用 infer U 指代返回值

U 有两种情况

普通返回值
Promise类型

如果u是promise类型，则需要递归检查


为什么要加 T extends Promise<any>
为了避免用户传入非promise，如果用户违反规则那么将报警告

*/
type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<any>
                                            ? MyAwaited<U>
                                            : U
                                         : never   
type promise = Promise<123>
type returnType = MyAwaited<promise>