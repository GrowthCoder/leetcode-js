var lengthOfLastWord = function(s) {
  let arr = s.trim().replace(/\s+/g, ' ').split(' ');
  let len = arr.length;

  return len ? arr[len-1].length: 0;
};

console.log(lengthOfLastWord("a"));