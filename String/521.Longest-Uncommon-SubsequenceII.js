/**
 * @param {string[]} strs
 * @return {number}
 * 最长非公共子串：某个字符串不是其他任何一个字符串的公共字符串，找出其最长长度
 * 1、要么是其自身
 * 2、要么是一个小于父串长度的子串
 */
var findLUSlength = function(strs) {
  let len = strs.length;
  strs = strs.sort((a, b) => a.length < b.length);
  if(!len) return -1;

  let result = -1, i = 0, j = 0;

  for(i = 0; i < len; ++i) {
    for(j = 0; j < len; ++j) {
      if (i === j) continue;
      if (checkSubs(strs[j], strs[i])) break;
    }
    if (j === len) {
      result = Math.max(result, strs[i].length);
    }
  }
  return result;
};

function checkSubs(strs, str) {
  let count = 0;
  for(let i = 0; i < strs.length; i++) {
    if (strs[i] === str[i]) {
      ++count;
      if (count === strs.length) break;
    }
  }
  return count === strs.length;
}

console.log(findLUSlength(["a","aa","aaa"]))