/**
 * 实现一个函数，判断两个变量值是否相等
 * 
 * 注意
 * - 数据类型不限于示例，尽可能考虑边界
 * - 数组比对不关心顺序，如 [1, 2] [2, 1] 值判定为相等
 * - function 引用相等即可
 */

const foo1 = {
    a: 1,
    b: '1',
    c: NaN,
    d: [{
        a: 1,
        b: 2
    }],
    f: {
        a: 1
    }
}

const foo2 = {
    a: 1,
    b: '1',
    c: NaN,
    d: [{
        a: 1
    }],
    f: {
        a: 1
    }
}

function compare(arg1, arg2) {
    let result = true;

    if(arg1 instanceof Object && arg2 instanceof Object) {
        if (Object.keys(arg1).length !== Object.keys(arg2).length) {
            result = false;
        }


        // for(let i in arg1) {
        //     if (!arg2[i]) {
        //         console.log(i)
        //         result = false;
        //         break;
        //     }
        // }
    }

    return result
}
console.log(compare(foo1, foo2))