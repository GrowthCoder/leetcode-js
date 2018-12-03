// // 乱排序
const arr = [0, 1, 2, 3, 4];

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr
}
console.log(shuffle(arr))