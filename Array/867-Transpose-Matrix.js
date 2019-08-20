/**
 * 矩阵的转秩
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let result = new Array(A[0].length).fill(new Array(A.length).fill());
  for(let i = 0; i < A[0].length; i++) {
    result[i] = [];
    for(let j = 0; j < A.length; j++) {
      result[i][j] = A[j][i];
    }
  }
  return result;
};
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));