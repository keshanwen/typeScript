// type AppendArgument<F, T> = F extends (...args: infer Args) => infer Return ? 
//   (x: T, ...args: Args) => Return : never

// type Fn = (a: number, b: string) => number
// type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number



// type AppendArgument<F extends (...args: any) => any, A> 
//   = (x: A, ...args: Parameters<F>) => ReturnType<F> 

// type Fn = (a: number, b: string) => number
// type FinalF = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

type AppendArgument<F extends (...args: any) => any, A>
    = (x: A, ...args: Parameters<F>) => ReturnType<F>

type Fn = (a: number, b: string) => number
type FinalFn = AppendArgument<Fn,boolean>    