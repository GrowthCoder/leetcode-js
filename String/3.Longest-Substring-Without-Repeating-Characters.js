/**
 * @param {string} s
 * @return {number}
 * 3. 无重复字符的最长子串
 * 滑动窗口
 * 推荐指数 ****
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;

  let result = 0, start = 0, map = new Map();

  for(let end = 0; end < s.length; end++) {
    if (map.get(s[end])) {
      start = Math.max(start, map.get(s[end]));
    }
    result = Math.max(end-start + 1, result);
    map.set(s[end], end+1);
  }
 
  return result;
};

console.log(lengthOfLongestSubstring('pwwkew'));