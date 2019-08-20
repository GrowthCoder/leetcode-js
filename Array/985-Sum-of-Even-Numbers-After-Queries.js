/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

// 超时解法
var sumEvenAfterQueries2 = function(A, queries) {
  let answer = [];

  for(let i = 0; i < queries.length; i++) {
    A[queries[i][1]] = A[queries[i][1]] + queries[i][0];

    answer[i] = A.reduce((acc, cur) => {
      if (!(cur % 2)) {
        acc = acc + cur;
      }
      return acc;
    }, 0)
  }
  return answer;
};

// 缓存sum值
var sumEvenAfterQueries = function(A, queries) {
  let sum = A.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc;
  }, 0);
  let answer = [];

  for(let i = 0; i < queries.length; i++) {

    let index = queries[i][1];
    let val = queries[i][0];
    A[index] += val;

    if (A[index]%2 === 0) {
      if (val %2 === 0) {
        sum += val;
      } else {
        sum += A[index];
      }
    } else {
      if (val % 2 !== 0) {
        // 奇 = 奇(val) + 偶
        sum -= (A[index] - val);
      }
    }
    answer.push(sum);
  }
  return answer;
};
console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))