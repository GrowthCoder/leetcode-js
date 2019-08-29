/**
 * https://leetcode-cn.com/problems/fair-candy-swap/
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  if (sumA === sumB) return [];
};
console.log(fairCandySwap([1,2], [2,3]))
