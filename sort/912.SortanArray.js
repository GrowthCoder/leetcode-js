/*
* 912. 排序数组
* https://leetcode-cn.com/problems/sort-an-array/
* sort 当数组长度小于等于10的时候，采用插入排序，大于10的时候，采用快排
*/ 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a,b) => a-b);
};