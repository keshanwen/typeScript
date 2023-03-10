// ?. 和 ?? 运算符，再来个 ! 非空断言操作符
// ! 排除掉 undefined 和 null


type Name = string | undefined

function saname(name: Name) {
  let saname: string
  // saname = name // error

  // if (name) { // 不太友好
  //   saname = name;
  // }

  saname = name!
}


type ListNode = {
  data: number;
  next?: ListNode;
};

function addNext(node: ListNode) {
  if (node.next === undefined) {
    node.next = { data: 0 };
  }
}

function setNextValue(node: ListNode, value: number) {
  addNext(node);
  node.next!.data = value;
}

// type AjaxState<T> = {
//   state: 'initial' | 'pending' | 'complete' | 'error';
//   response: T | null;
// };

// function getAjaxState(ajaxState: AjaxState<number[]>) {
//   if (ajaxState.state === 'complete') {
//     console.log(ajaxState.response?.length);
//   }
// }


type AjaxState<T> =
  { state: 'initial' | 'pending' | 'error', response: null } |
  { state: 'complete', response: T };

function getAjaxState(ajaxState: AjaxState<number[]>) {
  if (ajaxState.state === 'complete') {
    console.log(ajaxState.response.length);
  }
}
