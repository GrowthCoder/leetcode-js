/*
    抖音笔试题
    diffVersion(version1, version2) {}
    版本号可能是7.5.0或者1.12这种格式，输出大的版本号
*/ 

function diffVersion(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let result = '';

    while(arr1.length || arr2.length) {
        // 便利 补0思想
        let x = arr1.pop() || 0;
        let y = arr2.pop() || 0;
      
        result = Number(x) > Number(y) ? version1 : version2;

        if (result) {
            break;
        }
    }
    return result;    
}
// console.log(diffVersion('9.5', '1.0.1'))

// 2.求二叉树所有根到叶子路径组成的数字之和
// 每个节点都对应一个数字，等于其父节点对应的数字乘以 10，再加上该节点的值（这里假设根节点的父节点对应的数字是0）。只要计算出每个叶子节点对应的数字之和
// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/qiu-gen-dao-xie-zi-jie-dian-shu-zi-zhi-he-by-leetc/
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
}
 
// 解法一 深度优先搜索求解 传递sum
function treeSum(root) {
    let calcTreeSum = (root, sum = 0) => {
        if (!root) return 0;

        sum = Number(sum) * 10 + Number(root.val);

        if (!root.left && !root.right) {
            return sum;
        }

        return calcTreeSum(root.left, sum) + calcTreeSum(root.right, sum);
    }

    return calcTreeSum(root);
}

// 2 广度优先搜索 计算节点值
function sumNumbers(root) {
    if (!root) return 0;
    let sum = 0;
    let nodeQueue = [];
    let numQueue = [];

    nodeQueue.push(root);
    numQueue.push(root.val);

    while(nodeQueue.length) {
        let node = nodeQueue.pop();
        let num = numQueue.pop();

        if (!node.left && !node.right) {
            sum += num;
        } else {
            if (node.left) {
                nodeQueue.push(node.left)
                numQueue.push(num * 10 + node.left.val)
            }

            if (node.right) {
                nodeQueue.push(node.right)
                numQueue.push(num * 10 + node.right.val)
            }
        }
    }
    return sum;
}

console.log(sumNumbers(root))
