//评测题目: 
//题目1：
/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，count是0或正整数，letter是区分大小写的纯字母
 * 示例：
 * const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * const s = '2[abc]3[cd[e]]fg'; decodeString(s); // 返回'abcabccdecdecdefg'
 */

//题目2：请实现一个throttle(func, wait)函数 // 让func无法在很短的时间间隔内连续调用，当上一次函数执行后过了规定的时间间隔wait后，才能进行下一次该func函数的调用


// function decodeString (s) {
//   let strArr = s.match(/\[\w*\]/g)

//   let countArr = s.replace(/\[\w*\]/g, '*').split('*')

//   let result = ''

//   countArr.forEach((item, index) => {
//     for(var i = 0; i < item; i++) {
//       result += strArr[index]
//     }
//   })

//   return result.replace(/[\[\]]/g, '')
// }

// console.log(decodeString('3[a]2[bc]'))

function throttle(func, wait) {
  let last = 0

  return function() {
    let that = this

    let now = +new Date()

    if(now -last > wait) {
      last = now
      func.call(that, arguments)
    }
  }
}

// setInterval(() => {
//   throttle(() => console.log('emit'), 200)
// }, 100)

function decodeString(s) {
  const unitReg = /(\d*)(\[[a-z]+\])/g

  if (!s.match(unitReg)) return s

  s = s.replace(unitReg, function(match, p1, p2) {
    let str = ''

    if (/\d/.test(p1)) {
      for(let i = 0; i < parseInt(p1); i++) {
        p2 = p2.replace(/[\[\]]/g, '')
        str += p2
      }
    }
    
    return str 
  })

  return decodeString(s)
} 

console.log(decodeString("3[a]2[b4[F]c]"))