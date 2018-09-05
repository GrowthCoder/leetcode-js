/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums = nums.sort(function(a, b) {return a-b})

  var result = [], target, low, height;

  for(var i = 0; i < nums.length; i++) {
    target = nums[i]
    low = i + 1;
    height = nums.length - 1;

    while(low < height) {
      if (nums[low] + nums[height] < -target) {
        low++;
      } else if (nums[low] + nums[height] > -target) {
        height--;
      } else {
        result.push([nums[low], target, nums[height]]);
        low++;
        height--;
      }
    }
  }

  return result
};
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))