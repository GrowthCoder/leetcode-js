let KthLargest = function(k, nums) {
  this.k = k;
  this.result = nums.sort((a,b) => b-a).slice(0, k);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let len = this.result.length;
  if (len < this.k) {
    this.result.push(val);
    return this.result.sort((a, b) => b-a)[this.k-1];
  }
  if (val < this.result[len-1]) {
    return this.result[len-1];
  } else {
    let i = len -2;
    for(i; i>=0 ; i--) {
      if (this.result[i] < val) {
        this.result[i+1] = this.result[i];
      } else {
        break;
      }
    }
    i < 0 ? this.result[0] = val : this.result[i+1] = val;
  }
  return this.result.slice(0, this.k)[this.k-1];
 };

let k = 2;
let arr = [0];
let kth = new KthLargest(k, arr);
console.log(kth.add(-1))
console.log(kth.add(1))
console.log(kth.add(-2))
console.log(kth.add(-4))
console.log(kth.add(3));  

