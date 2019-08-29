/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = [];
  for(num of nums) {
    // 将数组元素当成出现的下标
    let index = Math.abs(num) - 1;
    // 将对应值变为负数
    nums[index] = - Math.abs(nums[index]);
  }

  // 如果nums还有正数说明没有出现在数组中
  nums.filter((item, index) => item > 0 && result.push(index+1))

  return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))