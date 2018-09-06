/**
 * https://leetcode.com/problems/4sum/description/
 * Difficulty:Medium
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * Note: The solution set must not contain duplicate quadruplets.
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 ]
 */
/**
 * 解题思路
 * 跟三个数想加类似，但是每次遍历都有过滤和之前重复的元素
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []

  let result = [], low, height, current

  nums.sort(function(a, b) { return a-b })
  
  for(var i =  0; i < nums.length; i++) {
    if (i != 0 && nums[i] == nums[i-1]) continue

    for(var j = i + 1; j < nums.length; j++) {
      if (j != i+1 && nums[j] == nums[j-1]) continue
      current = nums[i] + nums[j];

      low = j + 1;
      height = nums.length - 1

      while(low < height) {
        if (nums[low] + nums[height] + current == target) {
          result.push([nums[i], nums[j], nums[low], nums[height]])
          do {
            low++;
          } while(nums[low] == nums[low - 1])
        } else if (nums[low] + nums[height] + current > target) {
          height--
        } else if (nums[low] + nums[height] + current < target) {
          low++
        }
      }
    }
  }
  return result
};

console.log(fourSum([-1,0,1,2,-1,-4], -1))