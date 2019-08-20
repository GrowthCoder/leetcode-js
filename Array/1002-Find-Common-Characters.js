/**
 * @param {string[]} A
 * @return {string[]}
 * 输入：["bella","label","roller"]
 * 输出：["e","l","l"]
 */
var commonChars = function(A) {
  const len = A.length;
  let result = A[0].split('');

  for(let i = 1; i < len; i++) {
    let temp = A[i].split('');
    // temp中将匹配到的数据置1 避免影响重复字符
    result = result.filter(item => temp.indexOf(item) > -1?temp[temp.indexOf(item)] = 1: false)
  }
  return result;
};

console.log(commonChars(["cool","lock","cook"]));