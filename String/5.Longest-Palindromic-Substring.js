/**
 * @param {string} s
 * @return {string}
 * 5. 最长回文子串
 */
var longestPalindrome = function(s) {
  if (!s) return 0;

  let n = s.length;
  let res = '';
  let dp = new Array(s.length).fill(new Array(s.length).fill());
  // for(let i = 0 ;i < n; i++){
  //   for(let j = 0; j <= i ;j ++){
  //     if(s.charAt(i) == s.charAt(j) && ( i - j <= 2 || dp[j+1][i-1]))
  //         dp[j][i] = true;
  //     if (dp[j][i] && (i - j + 1 > res.length)){
  //         res = s.substring(j,i+1);
  //     }
  //   }
  // }
  return dp;
};
console.log(longestPalindrome('abc'))