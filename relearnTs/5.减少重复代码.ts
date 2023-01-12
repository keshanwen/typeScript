
type Func = (a: string, b: string) => number

type HTTPFunction = (url: string, opts?: any) => any

interface Person {
    firstName: string;
    lastName: string;
}

// interface PersonWithBirthDate {
//     firstName: string;
//     lastName: string;
//     birth: Date;
// }

// interface PersonWithBirthDate extends Person {
//     birth: Date
// }

type PersonWithBirthDate = Person & { birth: Date }

interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

// interface TopNavState {
//   userId: string;
//   pageTitle: string;
//   recentFiles: string[];
// }


// type TopNavState = {
//     userId: State['userId'];
//     pageTitle: State['pageTitle'];
//     recentFiles: State['recentFiles']; 
// }

// type TopNavState = {
//     [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
// }


type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>



// 想要定义一个类型来匹配一个初始配置项的形状，可以使用 typeof 操作费来快速定义该接口类型
const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: "#00FF00",
    label: "VGA",
  };
  
  // interface Options {
  //   width: number;
  //   height: number;
  //   color: string;
  //   label: string;
  // }

  type Options = typeof INIT_OPTIONS


  interface SaveAction {
    type: 'save',
    name: 'saveAction',
    text: 'text'
  }
  
  interface LoadAction {
    type: 'load',
    like: 'like'
  }

  
  type Action = SaveAction | LoadAction

//   type ActionType = 'save' | 'load'
//   type ActionType = Action['type']
type ActionRec = Pick<Action, 'type'>