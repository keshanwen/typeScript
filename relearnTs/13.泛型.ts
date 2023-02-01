// 返回 promise 返回值类型
async function stringPromise() {
    return 'hello,kebi'
  }
  
  interface Person {
    name: string;
    age: number;
  }
  
  async function personPromise() {
    return {
      name: 'kebi',
      age: 18
    } as Person
  }

  type PromiseType<T> = (args: any[]) => Promise<T>;
  type UnPromiseType<T> = T extends PromiseType<infer U> ? U : never;
  
  type extractStringPromise = UnPromiseType<typeof stringPromise>
  type extractPeronPromise = UnPromiseType<typeof personPromise>
  

  
// 使用泛型创建对象
class FirstClass {
    id: number | undefined;
  }
  
  class TwoClass {
    name: string | undefined;
  }
  
  // class GenericCreator<T> {
  //   create(): T {
  //     return new T()
  //   }
  // }
  
  // const creator1 = new GenericCreator<FirstClass>();
  // const firstClass: FirstClass = creator1.create()
  
  
  // const creator2 = new GenericCreator<TwoClass>();
  // const twoClass:TwoClass = creator2.create()
  
  // interface Type<T> extends Function {
  //   new (): T;
  // }
  
  // 构造函数中有任意个参数
  interface Type<T> extends Function {
    new (...args: any[]): T
  }
  
  
  class GenericCreator<T> {
    create<T>(c: Type<T>): T {
      return new c();
    }
  }
  
  // class GenericCreator<T> {
  //   create<T>(c: { new (): T}): T {
  //     return new c()
  //   }
  // }
  
  /*
    如果构造函数中有参数
    create<T>(c: {new(a: number): T}): T {
      return new c(num)
    }
  */
  
  const creator1 = new GenericCreator<FirstClass>();
  const firstCalss:FirstClass = creator1.create(FirstClass)
  
  const creator2 = new GenericCreator<TwoClass>();
  const twoClass:TwoClass = creator2.create(TwoClass)
  