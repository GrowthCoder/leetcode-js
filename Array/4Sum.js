/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []

  let result = []

  nums.sort(function(a, b) { return a-b })
  
  for(var i =  0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      
    }
  }
};

console.log(fourSum([0,1,-1,1,2,-1], 0))