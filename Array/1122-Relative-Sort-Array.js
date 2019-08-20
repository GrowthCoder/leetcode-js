/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let result = [];
  let temp = [];
  let countMap = {}

  arr1.forEach(item => {
    if (arr2.indexOf(item) === -1) {
      temp.push(item);
    }
    if (!countMap[item]) {
      countMap[item] = 1;
    } else {
      countMap[item] = countMap[item] + 1;
    }
  })
 
  arr2.forEach(item => {
    for(var i = 0; i< countMap[item]; i++) {
      result.push(item)
    }
  })
  return result.concat(temp.sort((a,b) => a-b));
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))