var kthSmallest = function(matrix, k) {
  let a = [];
  for(let i = 0; i < matrix.length; i++) {
    a = a.concat(matrix[i]);
  }
  return heapSort(a)[k-1];
};
// 交换数据
// function swap(A, i, j) {
//   let temp = A[i];
//   A[i] = A[j];
//   A[j] = temp;
// }
// ES6
// [a,b] = [b,a];

// 调整堆 调整为大顶堆
function heapAjust(data, i, len) {
  let child = 2 * i + 1; // 左子节点

  while(child <= len) {
    // 如果右子节点存在 且大于左节点值，child指向右节点
    if (child + 1 <= len && data[child] < data[child + 1]) {
      child = child + 1;
    }
    // 入股当前节点值小于子节点 互换
    if (data[child] > data[i]) {
      [data[i], data[child]] = [data[child], data[i]];
      i = child;
      child = 2 * i + 1;
    } else {
      break;
    }
  }
}
// 堆排序
function heapSort(A) {
  // 建堆 从后往前 从右向左 构建大顶堆
  for(let i = Math.floor((A.length - 2) / 2); i >= 0; i--) {
    heapAjust(A, i, A.length);
  }
  // 堆排序 最下面元素与堆顶元素交换
  for(let j = A.length - 1; j > 0; j--) {
    [A[j], A[0]] = [A[0], A[j]];
    // 大顶推排序 从顶向下调整堆 移到尾部的不参与排序 最后效果从小到大排序
    heapAjust(A, 0, j - 1);
  }
  return A;
}


// 选择排序
function selectSort(arr){
  for(let i = 0,len = arr.length; i < len; i++){
    let k = i;//用于存放当前循环中最小值得index 默认为循环初识值的index
    for(let j = i; j < len; j++){
      if(arr[j] < arr[k]){
        k = j;
      }
    }
    if(k !== i){
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  }
  return arr;
}

console.log(kthSmallest( [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
], 8))