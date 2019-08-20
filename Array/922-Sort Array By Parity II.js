/**
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 * 按奇偶排序
 * 
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII2 = function(A) {
  let result = [];

  for(var i = 0; i < A.length; i++) {
    if (!(A[i] % 2) && !(i%2)) {
      result.push(A[i])
    } else if ((A[i] % 2) && i % 2) {
      result.push(A[i]);
    } else {
      var j = i + 1;
      while(j < A.length) {
        var temp = A[i];
        if (i%2 && A[j]%2) {
          // 奇数
          A[i] = A[j];
          A[j] = temp;
          result.push(A[i]);
          break;
        } else if (!(i%2) && !(A[j]%2)) {
          // 偶
          A[i] = A[j];
          A[j] = temp;
          result.push(A[i]);
          break;
        } else {
          j++;
        }
      }
    }
  }
  return result;
};

var sortArrayByParityII = function(A) {
  let even = 0; // 偶数
  let odd = 1; // 奇数
  let result = new Array(A.length);

  A.forEach((item, index) => {
    if (!(item % 2)) {
      // 偶数
      result[even] = item;
      even +=2;
    } else {
      result[odd] = item;
      odd +=2;
    }
  })
  
  return result;
};

console.log(sortArrayByParityII([4,2,3,1]));