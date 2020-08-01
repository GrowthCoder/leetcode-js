
// 二叉树的中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var inorderTraversal = function(root) {
    let result = []
    const inorder = root => {
        if (!root) return null
        inorder(root.left)
        result.push(root.val)
        inorder(root.right)
    }
    inorder(root)

    return result
};
// var root = new TreeNode(1)
// var left = new TreeNode(2)
// var right = new TreeNode(4)
// root.left = left
// root.right = right

// console.log(inorderTraversal(root))

// 二叉树前序遍历 递归调用
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    const preOrder = root => {
        if (!root) return null
        result.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    preOrder(root)
    return result
};

// var root = new TreeNode(1)
// var left = new TreeNode(2)
// var right = new TreeNode(4)
// root.left = left
// root.right = right
// console.log(preorderTraversal(root), 'preorderTraversal')

// n叉树的前序遍历
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
};
var preorder = function(root) {
    let result = []

    const inPreOrder = root => {
        if (!root) return null
        result.push(root.val)
        if (root.children && root.children.length) {
            for(var i = 0; i < root.children.length; i++) {
                inPreOrder(root.children[i])
            }
        }
    }
    inPreOrder(root)
    return result
};
let child1 = new Node(1)
let child5 = new Node(2)
let child3 = new Node(3, [child5])
let child4 = new Node(4)
let child2 = new Node(5, [child3, child4])
let root = new Node(22, [child1, child2])

console.log(preorder(root), 'preorder')


// BFS 使用队列 先进先出 进行广度遍历
function BFS(root) {
    if (!root) return null
    let queue = []

    queue.push(root)

    while(queue.length) {
        let node = queue.shift()

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
        }
    }
}