
/**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.
Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.
For the purpose of this problem, we define empty string as valid palindrome.
 * @param {string} s
 * @return {boolean}
 * 回文字符串
 */


var isPalindrome = function(s) {
  if (!s.trim()) return true

  s = s.replace(/\W/g, '').toLocaleLowerCase() // \W 非数字字母下划线

  if (!s.length) return true
  
  const len = s.length
  
  for(let i = 0; i< len/2; i++) {
    if (s[i] !== s[len-i-1]) {
      return false
    }
  }
  
  return true
};

console.log(isPalindrome('abb'))
// console.log(isPalindrome('aba'))