/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let result;
  for(let i = 1; i <= nums.length; i++) {
    if(nums.indexOf(i) === -1) {
      result = i;
      break;
    }
  }
  return result || nums.length + 1;
};
console.log(firstMissingPositive([]))