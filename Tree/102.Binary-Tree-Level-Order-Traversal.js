/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 使用队列存放节点 遍历节点 存储每个节点的子节点 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let queue = [] // 存放节点
    let result = [] // 目标数组

    result.push([root.val])
    queue.push(root)

    while(queue.length) {
        let len = queue.length;
        let temp = []

        while(len) {
            let first = queue.shift()

            if (first.left) {
                queue.push(first.left)
                temp.push(first.left.val)
            }
    
            if (first.right) {
                queue.push(first.right)
                temp.push(first.right.val)
            }
    
            len--
        }
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
console.log(levelOrder(root))