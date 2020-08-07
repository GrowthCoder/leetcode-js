/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * 13. 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        // if (map[s[i]]) {
        //     if (i && map[s[i-1]] < map[s[i]]) {
        //         sum += (map[s[i]] - 2*map[s[i-1]])
        //     } else {
        //         sum += map[s[i]]
        //     }
        // }
        if (map[s[i]] < map[s[i+1]]) {
            sum -= map[s[i]]
        } else {
            sum += map[s[i]]
        }
    }
    return sum
};
console.log(romanToInt("IIV"))