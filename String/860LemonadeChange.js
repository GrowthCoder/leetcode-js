/*
* https://leetcode-cn.com/problems/lemonade-change/description/
* 柠檬水找零
*
* 思路
* 根据 5 10 15 20 进行判断 分别处理场景
*/ 

/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function(bills) {
//   const len = bills.length

//   if (bills[0] > 5) return false

//   let five = 0, ten = 0

//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] == 5) {
//       five++
//     } else if (bills[i] == 10) {
//       if (five) {
//         five--
//       }else {
//         return false
//       }
//       ten++
//     } else if (bills[i] == 20) {
//       if (five && ten) {
//         five--
//         ten--
//       } else if (five >=3) {
//         five -= 3
//       }else {
//         return false
//       }
//     }
//   }
//   return true
// };

var lemonadeChange = function (bills) {
  let five = 0, ten = 0

  for (let bill of bills) {
    if (bill == 5) {
      five++
    } else if (bill == 10 && five) {
      ten++
      five--
    } else if (bill == 20 && five && ten) {
      five--
      ten--
    } else if (bill == 20 && five >= 3) {
      five -=3
    } else {
      return false
    }
  }
  return true
}
console.log(lemonadeChange([5,5,10,10,20]))