// 非空断言有啥用

/*
function sayHello(name: string | undefined) {
  let sname: string = name; // Error
}
*/

/*
function sayHello(name: string | undefined) {
  let sname: string;
  if (name) {
    sname = name;
  }
}
*/

function sayHello(name: string | undefined) {
  let sname: string = name!;
}

// x! 将从 x 值域中排除 null 和 undefined

//  忽略 undefined 和 null 类型

function myFunc(maybeString: string | undefined | null) {
  //const onlyStriing: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!;
}

// 调用函数时忽略 undefined 类型
type NumGenerator = () => number;

function myFuncs(NumGenerator: NumGenerator | undefined) {
  // const num1 = NumGenerator() // error
  const num2 = NumGenerator!();
}

// 非空断言操作符使用示例

type ListNode = {
  data: number;
  next?: ListNode;
}

function addNext(node: ListNode) {
  if (node.next === undefined) {
    node.next = {
      data: 0
    }
  }
}

function setNextValue(node: ListNode, value: number) {
  addNext(node);
  // node.next?.data = value; // error
  node.next!.data = value;
}


/*
type AjaxState<T> = {
  state: 'initial' | 'pending' | 'complete' | 'error';
  response: T | null;
}

function getAjaxState(ajaxState: AjaxState<number[]>) {
  if (ajaxState.state === 'complete') {
    //console.log(ajaxState.response.length) // error
    console.log(ajaxState.response!.length)
  }
}
*/

// 更好的解决方案，可辨识联合
type AjaxState<T> =   { state: 'initial'|'pending'|'error', response: null } |
{ state: 'complete', response: T };

function getAjaxState(ajaxState: AjaxState<number[]>) {
  if (ajaxState.state === 'complete') {
    console.log(ajaxState.response.length);
  }
}