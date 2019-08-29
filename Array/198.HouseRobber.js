/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  let result = [];
  if (!len) return 0;

  if (nums.length === 1) return nums[0];

  result[0] = nums[0];
  result[1] = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < len; i++) {
    result[i] = Math.max(result[i - 1], nums[i]+result[i-2]);
  }

  return result[len-1];
};

console.log(rob([1, 3, 2,4]))