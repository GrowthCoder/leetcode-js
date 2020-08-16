/**
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty:Easy
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

 /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {

//   for (var i = 0; i < numbers.length - 1; i++) {
//       for (var j = i + 1; j < numbers.length; j++) {
//           if (numbers[i] + numbers[j] === target) return [i, j];
//       }
//   }
// };

// 方法二：哈希表
/** 
*  通过空间换速度的方式，我们可以将查找时间从 O(n) 降低到 O(1)
*  通过查看每个元素对应的目标元素是否在表中
*  不在表中将其存入表中
**/ 
var twoSum = function(nums, target) {
    var map = {}
    let result = []

    for(var i = 0; i<nums.length; i++) {
        if(map[target-nums[i]] !== undefined) {
            result.push( [map[target-nums[i]], i])
        } else {
            map[nums[i]] = i
        }
    }
    return result
};

console.log(twoSum([2,7,11,15, 4, 5], 9))