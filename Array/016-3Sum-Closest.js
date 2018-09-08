/**
 * https://leetcode.com/problems/3sum-closest/description/
 * Difficulty:Medium
 *
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * For example, given array S = [-1 2 1 -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 解体思路
 * 需要先定义一个最小值
 * 每次去更新这个最小值
 * 最后输出这个值
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length

  nums.sort(function(a, b){return a-b})

  let low, height, min
  // 自定义最小值是关键
  min = nums[0] + nums[1] + nums[2]

  
  for (var i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue

    low = i + 1
    height = len - 1
    while(low < height) {
      let sum = nums[low] + nums[height] + nums[i]
      
      if (sum === target) return sum
      if (sum > target) height--
      if (sum < target) low++

      if (Math.abs(target - sum) < Math.abs(target - min)) {
        min = sum
      }
    }
  }

  return min
};

console.log(threeSumClosest([1,5,2,3], 6))