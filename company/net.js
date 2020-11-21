// 网易笔试题 1 list 转tree
const oldData = [
    {id:1,name:'boss',parentId:0},
    {id:2,name:'lily',parentId:1},
    {id:3,name:'jack',parentId:1},
    {id:4,name:'john',parentId:2},
    {id:5,name:'boss2',parentId:0},
]


function listToTree(list) {
    if (!list || !list.length) {
        return []
    }

    for(let i = 0; i < list.length - 1; i++) {
        let pre = list[i];

        for (let j = 1; j < list.length; j++) {
            let current = list[j];

            // 当前节点是前个节点子节点
            if (pre.id === current.parentId) {
                if (!pre.children) {
                    pre.children = [];
                }

                pre.children.push(current);
                list.splice(j, 1);
                j--;
            }

            // 
            if(pre.parentId === current.id) {
                if (!current.children) {
                    current.children = []
                }

                current.children.push(pre);
                list.splice(i, 1);
                i--;
                break;
            }

        }
    }

    return JSON.stringify(list);
}

// console.log(listToTree(oldData))

// 网易笔试题2 有效括号
function isValid(str) {
    let isDouble = (c1, c2) => {
        return (c1 === '{' && c2 === '}') || (c1 === '[' && c2 === ']') || (c1 === '(' && c2 === ')');
    }

    let strs = str.split('');
    let stack = [strs[0]];

    for(let i = 1; i < strs.length; i++) {
        if (isDouble(stack[stack.length - 1], strs[i])) {
            stack.pop()
        } else {
            stack.push(strs[i])
        }
    }

    return stack.length === 0;
}
let str = "{[]}";
console.log(isValid(str))

// 3.promise.or

