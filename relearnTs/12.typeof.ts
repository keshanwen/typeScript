// typeof 操作符可以用来获取一个变量或对象的类型

interface Person {
    name: string;
    age: number;
  }
  
  const sem: Person = {
    name: 'kebi',
    age: 18
  }
  
  type Sem = typeof sem
  
  const lolo: Sem = {
    name: 'yaoming',
    age: 11
  }
  
  const kakuqo = {
      name: "kakuqo",
      age: 30,
      address: {
        province: '福建',
        city: '厦门'
      }
  }
  
  type Kakuqo = typeof kakuqo;
  /*
   type Kakuqo = {
      name: string;
      age: number;
      address: {
          province: string;
          city: string;
      };
  }
  */
  
  // 获取函数对象的类型
  
  function toArray(x: number): Array<number> {
    return [x];
  }
  
  type Func = typeof toArray

  // const 断言
/*
  表达式中的任何字面量类型都不应该被扩展
  对象字面量的属性，将使用 readonly 修饰
  数组字面量将变成 readonly 元组

  注意
  const 断言只适用于简单的字面量表达式
  const 上下文不会立即将表达式转为完全不可变
*/

const COLORS = {
    red: 'red',
    blue: 'blue'
  }
  
  // 首先通过typeof操作符获取Colors变量的类型，然后通过keyof操作符获取该类型的所有键，
  // 即字符串字面量联合类型 'red' | 'blue'
  type Colors = keyof typeof COLORS
  let color: Colors;
  color = 'red'// Ok
  color = 'blue'// Ok
  
  // Type '"yellow"' is not assignable to type '"red" | "blue"'.
  color = 'yellow'// Error
  