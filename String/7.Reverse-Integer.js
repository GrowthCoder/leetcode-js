/**
 * 7. 整数反转
 * 解题思路
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n = 0;
    while(x !== 0) {
        n = n * 10 + x % 10; // 获取最小为 变为最大位置
        x = Math.ceil(x / 10); // 整数位
    }
    return n
};
console.log(reverse(-120))