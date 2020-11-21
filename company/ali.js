// 第一题
// Given a sorted array and a number x, find the pair in array whose sum is closest to x
// examples：
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
// Output: 22 and 30
// Input: arr[] = {1, 3, 4, 7, 10}, x = 15
// Output: 4 and 10
// 实现一个 function
  

function sameNear(arr, target) {
  let len = arr.length;
  if (!len) {
    return 0;
  }

  let low = 0;
  let height = len - 1;
  let resultLow = low;
  let resultHeight = height;
  let diff = arr[height] - arr[low];

  while(low < height) {
    let sum = arr[low] + arr[height];
    if (Math.abs(sum - target) < diff) {
      diff = Math.abs(sum - target);
      resultLow = low;
      resultHeight = height;
    } else if (sum < target) {
      low++;
    } else {
      height--;
    }
  }
  return [arr[resultLow], arr[resultHeight]]
}

console.log(sameNear([1, 3, 4, 7, 10], 9999))


/*
 第二题
 问题：实现debounce 防抖函数
空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行

function debounce(action, idle) {

}

用法：
const throFun = () => console.log('hello');
const thro = debounce(throFun, 300);
body.on scroll = () => {
  thro();  // 若一直调用则不会执行，空闲时间大于 300 毫秒才会执行
}
*/

function debounce(action, idle) {
  let timer = null;
  let self = this;
  
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      action.apply(self, args)
    }, idle)
  }
}