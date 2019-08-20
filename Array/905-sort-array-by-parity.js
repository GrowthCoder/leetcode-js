/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity2 = function(A) {
  let even = [];
  let odd = [];
  A.forEach(item => {
    item%2 === 0 ? even.push(item) : odd.push(item);
  })
  return even.concat(odd);
};

var sortArrayByParity = function(A) {
  return A.reduce((acc, cur) => {
    cur%2 === 0 ? acc.unshift(cur) : acc.push(cur);
    return acc;
  }, [])
}
console.log(sortArrayByParity([3,4,2,3,4]))