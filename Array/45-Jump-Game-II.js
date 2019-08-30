/**
 * 跳跃游戏 II
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
// 局部最优 最后整体最优
// 每次跳到最远的位置
var jump = function(nums) {
  let count = 0;
  let n = nums.length;
  let maxPos = 0;
  let end = 0;

  if (n <= 1) return 0;

  for (let i = 0; i < n - 1; i++) {
    // 寻找能到最远的位置
    // num[i]+i 能到达最远位置下标
    maxPos = Math.max(nums[i]+i, maxPos);
    if (i == end) {
      // 更新边界，边界变化步数+1
      end = maxPos;
      count++;
    }
  }
  return count;
};
console.log(jump([2,3,1]))