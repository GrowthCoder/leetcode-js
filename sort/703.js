// 调整堆 调整为大顶堆
function heapAjust(data, i, len) {
  let child = 2 * i + 1; // 左子节点

  while(child <= len) {
    // 如果右子节点存在 且大于左节点值，child指向右节点
    if (child + 1 <= len && data[child] > data[child + 1]) {
      child = child + 1;
    }
    // 入股当前节点值小于子节点 互换
    if (data[child] < data[i]) {
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
    // // 大顶推排序 从顶向下调整堆 移到尾部的不参与排序 最后效果从小到大排序
    heapAjust(A, 0, j - 1);
  }
  return A;
}

let KthLargest = function(k, nums) {
  this.k = k;
  this.nums = nums;
  this.copyNums = [];
  this.result = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.copyNums.length) { 
    if (val > this.copyNums[this.copyNums.length - 1]) {
      this.copyNums.push(val);
      this.result = heapSort(this.copyNums);
    }
  } else {
    this.nums.push(val);
    this.result = heapSort(this.nums);
    this.copyNums = this.result.slice(0, this.k);
  }
    
    
  console.log(this.copyNums, 'copy')
  console.log(this.result, 'result')
  return this.result[this.k-1];
};

let k = 3;
let arr = [4,5,8,2];
let kth = new KthLargest(3, arr);
console.log(kth.add(3));  
console.log(kth.add(6))
