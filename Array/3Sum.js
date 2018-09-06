/**
 * https://leetcode.com/problems/3sum/
 * Difficulty:Medium
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]
 */
/**

/**
 * 解题思路
 * 三数相加=0，相当于两数想家= -target
 * 可以通过三次遍历求的，不过时间复杂度O(n3)
 * 另一种思路
 * 对数组排序，一次遍历，当前数为target,
 * 两个指针low,height，分别指向最低位和最高位，
 * 如果low、height对应数据相加大于-target,移动height指针，height--
 * 如果小于-target 移动low指针，low++
 * 如果相等则push近输出结果数组
 * 最后需要对结果去重
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums = nums.sort(function(a, b) {return a-b})

  var result = [], target, low, height;

  for(var i = 0; i < nums.length; i++) {
    if (target == nums[i]) continue
    
    target = nums[i]
    low = i + 1;
    height = nums.length - 1;

    while(low < height) {
      if (nums[low] + nums[height] < -target) {
        low++;
      } else if (nums[low] + nums[height] > -target) {
        height--;
      } else {
        result.push([target, nums[low], nums[height]]);
        // 防止添加重复数组，因为是已经排序后的，只需要判断相近元素是否相同即可
        do {
          low++;
        } while(nums[low] === nums[low-1])
      }
    }
  }

  return result
};
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))