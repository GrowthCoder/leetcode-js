/**
 * @param {number} n
 * @return {string}
 * 
1.     1
2.     11
3.     21
4.     1211
5.     111221
 */
var countAndSay = function(n) {
  if (n === 1) {
    return 1;
  }

  return countAndSay(n-1);
};


console.log(countAndSay(2))