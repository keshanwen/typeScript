/*
// 判断参数是否为string类型, 返回布尔值
function isString(s:unknown):boolean{
    return typeof s === 'string'
  }
  
  // 参数转为大写函数
  // 直接使用转大写方法报错, str有可能是其他类型
  function upperCase(str:unknown){
    str.toUpperCase()
    // 类型“unknown”上不存在属性“toUpperCase”。
  }
  
  // 判断参数是否为字符串,是在调用转大写方法
  function ifUpperCase(str:unknown){
  
    if(isString(str)){
      str.toUpperCase()
      // (parameter) str: unknown
      // 报错:类型“unknown”上不存在属性“toUpperCase”
    }
  }

  // 示例中我们虽然判断了参数str是string类型, 但是条件为true时, 参数str的类型还是unknown.也就是说这个条件判断并没有更加明确str的具体类型
  */

// // 判断参数是否为 string 类型，返回布尔值
// function isString(s:unknown):s is string {
//     return typeof s === 'string'
// }

// // 判断参数是否为字符串，是在调用转大写方法
// function ifUpperCase(str:unknown) {

//     if (isString(str)) {
//         str.toUpperCase()
//     }
// }

/*
    s is string 不仅返回 boolean 类型判断参数 s 是不是string 类型，同时明确的 string 类型返回到条件为true的代码块中

    因此当我们判断条件为true,即str为string类型时，代码块中str类型也转为更明确的 string 类型

*/ 

// 接口 interfaceA
interface interfaceA {
    name: string;
    age: number;
  }
  
  // 接口 interfaceB
  interface interfaceB {
    name: string;
    phone: number;
  }
  
  // 推断类型
  const obj1 = { name: "andy", age: 2 };
  // const obj1: {name: string;age: number;}
  
  const obj2 = { name: "andy", phone: 2 };
  // const obj2: {name: string;phone: number;}
  
  // 创建数组
  // arr1, 创建两个interfaceA[]数组, 数组每一项都是 obj1
  const arr1 = new Array<interfaceA>(2).fill(obj1);
  // const arr1: interfaceA[]
  
  // arr2, 创建两个interfaceB[]数组, 数组每一项都是 obj2
  const arr2 = new Array<interfaceB>(2).fill(obj2);
  // const arr2: interfaceB[]
  
  // 合并两种类型数组,
  //  arr3类型就是一个联合数组
  const arr3 = [...arr1, ...arr2];
  // const arr3: (interfaceA | interfaceB)[]
  
  
  const target = arr3[0];
  // const target: interfaceA | interfaceB  
  
  // Ok获取两个结构共有的属性
  console.log(target.name);
  
  // 获取两个接口不同的属性报错:
//   console.log(target.phone);
  // 报错: 类型“interfaceA”上不存在属性“phone”
  
//   console.log(target.age);
  // 报错:  类型“interfaceB”上不存在属性“age”

  type interfaceAB = interfaceA | interfaceB

  const isInterfaceA = (item:interfaceAB): item is interfaceA => {
    return (item as interfaceA).age !== undefined
  }

  if (isInterfaceA(target)) {
    console.log(target.age)
  } else {
    console.log(target.phone)
  }

  function isOfType<T>(
    target: unknown,
    prop: keyof T
  ): target is T {
    return (target as T)[prop] !== undefined
  }

  if (isOfType<interfaceA>(target,'age')) {
    console.log(target.age)
  }

  if (isOfType<interfaceB>(target,"phone")) {
    console.log(target.phone)
  }

  // https://www.jianshu.com/p/57df3cb66d3d?u_atoken=0b0b5a63-8d47-42cb-bf94-390b80b90057&u_asession=016iIJi1a8mRMGA4ifnFP2M3p7zi7lGBwtEGGz9jYtkYspc7BbExWPyd26-lQS0elqX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K8kQyeHSVcn-j07R_HIIK0xnHmbkqVcEgdObpAroqY1_GBkFo3NEHBv0PZUm6pbxQU&u_asig=05CVKgncGS6zO5dOpiej7tLwkQ42nX-aTzbevwZCpGr1N1g3qgwipf1a8xtTxwIpU5kMjmbfC1rO1CZcEfMeRcU-EaIOQaeNE-JG-SOkWywMkRcrc6lZDW-3PR52wZZhxatdRrcucKVu5FNV0tPDRG_zbjANDr1U_j3uxpN3EINXD9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzbX-KMFmEeHI9rbVsxiquLBTh50bn3sFVrkxcA1ZMnUT6xbSxAaWh9ph0bRUFW-6vO3h9VXwMyh6PgyDIVSG1W_Llrt60gRC_Z60EXYE0d49kyPuh-aVJIMNWYJ7HvPNtNN7FVcRzqiM1VrcrTzosnvLUXwzUNBTUQyb2694WNHgmWspDxyAEEo4kbsryBKb9Q&u_aref=1E2p3gJ9Cnr5%2FXp8DlkjE1E%2BSi0%3D
  
  