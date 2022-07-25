type User = {
    id: number;
    kind: string;
}

// function makeCustomr<T extends User>(u:T):T {
//     return {
//         id: u.id,
//         kind: 'customer'
//     }
// }

/*
 为什么会报错？

 因为T只是约束与User的类型，而不局限于User类型，所以返回T类型不仅仅只有id 和 kind，故需要一个接收其他类型的变量
*/

function makeCustomr<T extends User>(u:T):T {
    return {
        ...u,
        id: u.id,
        kind: 'customer'
    }
}
