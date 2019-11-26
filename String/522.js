/**
 * @param {string[]} strs
 * @return {number}
 * 最长非公共子串
 */
var findLUSlength = function(strs) {
  let longest = -1;
  for (let i = 0; i < strs.length; i++) {
    let isSub = true;
    for (let j = 0; j < strs.length; j++) {
      if (i != j && isSubsequence(strs[i], strs[j])) {
        isSub = false;
        break;
      }
    }
    if (isSub) longest = Math.max(longest, strs[i].length);
  }
  return longest;
};

// a 是否是b的子串
function isSubsequence(a,b) {
  if (a.length > b.length) return false;
  if (a === b) return true;

  let pos = 0;

  for (let i = 0; i < b.length; i++) {
    if (pos === a.length) break;
    if (a.charAt(pos) === b.charAt(i)) {
      pos++;
    }
  }
  
  return pos === a.length;
}
console.log(findLUSlength(["aaaaaa", "aaaaaab", "aaa"]))