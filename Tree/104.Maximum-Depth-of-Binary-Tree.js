/*
 * @Description: 104. 二叉树的最大深度 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @Author: ting.gao
 * @LastEditors: ting.gao
 * @Date: 2020-07-28 19:40:44
 * @LastEditTime: 2020-07-29 09:29:33
 */ 

/**
 * 解决二叉树问题 使用递归思想
 * DFS分别计算出左子树和右子树的深度 最后Math.max进行比较
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};