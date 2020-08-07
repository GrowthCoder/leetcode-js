/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let j = len - 1;
    for(let i = 0; i < j; i++) {
        j = len - i - 1;
        [s[i], s[j]] = [s[j], s[i]]
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))