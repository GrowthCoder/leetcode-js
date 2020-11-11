let items = [6, 5, 5, 6, 5, 5,6,6,1,1]; // 想要的输出结果[[6], [5, 5], [6], [5, 5]]

function changeArray(arr) {
    let result = [];
    let len = arr.length;
    let j = 0;
    if (len < 2) return arr;

    for(let i = 1; i < len; i++) {
        if (arr[i] !== arr[i-1]) {
            result.push(arr.slice(j, i));
            j = i;
        }
        if (i === len - 1) {
            result.push(arr.slice(j, i + 1));
        }
    }

    return result
}
console.log(changeArray(items))