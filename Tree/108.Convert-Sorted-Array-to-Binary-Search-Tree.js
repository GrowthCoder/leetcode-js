/**
 * 108. 将有序数组转换为二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * 本题中序遍历是升序的 根据中序遍历创建搜索树 同时为了达到树的平衡，根节点采取取中间位置
 * 递归创建节点 深度遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null
    return dfs(nums, 0, nums.length - 1)

    function dfs(data, left, right) {
        if (left > right) return null

        let middle = Math.floor((left + right) / 2)

        let root = new TreeNode(data[middle])
        root.left = dfs(data, left, middle - 1);
        root.right = dfs(data, middle + 1, right)
        return root;
    }
};
console.log(sortedArrayToBST([-10,-3,0,5,9]))