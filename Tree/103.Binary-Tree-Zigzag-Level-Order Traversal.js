/**
 * 103. 二叉树的锯齿形层次遍历
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = []; //存放目标数组
    let queue = []; // 存放节点队列
    let level = 0; // 层高

    if (!root) return [];
    queue.push(root);
    // result.push([root.val])

    while(queue.length) {
        let temp = [];
        let len = queue.length;

        while(len) {
            let node = queue.shift()
            if ((level % 2) === 0) {
                node.val && temp.push(node.val)
            } else {
                node.val && temp.unshift(node.val)
            }

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            len--;
        }
        level++;
        temp.length && result.push(temp)
    }
    return result
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var root = new TreeNode(1)
var left = new TreeNode(2)
var right = new TreeNode(null)
var secondLeft = new TreeNode(3)
var secondRight = new TreeNode(null)
var thirdLeft = new TreeNode(4)
var thirdRight = new TreeNode(null)

root.left = left
root.right = right

left.left = secondLeft
left.right = secondRight

// right.left = thirdLeft
// right.right = thirdRight
console.log(zigzagLevelOrder(root))