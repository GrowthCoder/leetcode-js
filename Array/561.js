/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum2 = function(nums) {
  return nums.sort((a,b) => a-b).reduce((acc, cur, index) => {
    return index%2 == 0 ? acc +=Math.min(cur, nums[index+1]): acc;
  }, 0)
};
var arrayPairSum = function(nums) {
  return nums.sort((a,b) => a-b).reduce((acc, cur, index) => {
    return index%2 == 0 ? acc += cur: acc;
  }, 0)
};
console.log(arrayPairSum([3,2,1,4]))