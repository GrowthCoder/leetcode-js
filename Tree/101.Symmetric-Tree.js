/**
 * 101. 对称二叉树 https://leetcode-cn.com/problems/symmetric-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归思想 深度遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    
    return dfs(root.left, root.right)
};

function dfs (left, right) {
    if (!left && !right) {
        return true
    }

    if (!left || !right) {
        return false
    }

    if (left.val !== right.val) {
        return false
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left)
}


// 方法二 队列实现 
// 每次遍历 将需要比较的两个依次入队
var isSymmetric2 = function(root) {
    if (!root) return true
    let result = []

    result.push(root.left)
    result.push(root.right)
    
    while(result.length) {
        let left = result.shift()
        let right = result.shift()

        if (!left && !right) {
            continue
        }

        if (!left || !right) {
            return false
        }

        if (left.val !== right.val) {
            return false
        }

        result.push(left.left)
        result.push(right.right)
        result.push(left.right)
        result.push(right.left)
    }
    return true
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var root = new TreeNode(1)
var left = new TreeNode(2)
var right = new TreeNode(2)
var secondLeft = new TreeNode(4)
var secondRight = new TreeNode(4)
var thirdLeft = new TreeNode(3)
var thirdRight = new TreeNode(3)

root.left = left
root.right = right

left.left = secondRight
left.right = thirdLeft

right.left = thirdLeft
right.right = secondLeft
console.log(isSymmetric2(root))