// =====================================================
// 欢迎参加有赞前端 Coding 面试
// =====================================================
// 界面介绍：
//   上方设置按钮可以切换语言、字体大小、主题
//   右侧控制台可以显示代码执行结果，可用于编码过程中的 DEBUG
// =====================================================
// Coding 须知：
//   本次 Coding 时间建议为 45 分钟
//   题目难度大致自上向下递增，请量力答题
// =====================================================


/**
 * ## 问题1
 * 监听浏览器窗口大小变化以触发某回调函数(内容可以是 console.log(1))
 * 问: 如何进行优化，使得当窗口大小停止变化 n 秒后触发回调以避免回调频繁触发
 * 
 * 备注: 由于编辑器沙箱环境中无法获取到 window，写出优化方法即可，无需真实监听浏览器窗口变化
 */
function fn(f, delay) {
    let timer;

    return (...args) => {
        if(timer) {
            clearTimeout(timer)

            timer = setTimeout(() => {
                f.apply(this, args)
            }, delay)
        }
    }
}



/**
 * ## 问题2
 * 解析url中的queryString
 * 
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D
 * 输出：
 * {
 *  name: "coder",
 *  age: "20",
 *  callback: "https://youzan.com?name=test",
 *  list: ["a", "b"],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  }
 * }
 */
function queryString(url) {
    let result = {};
    
    let paramsList = url.slice(url.indexOf('?') + 1).split('&');

    paramsList.forEach(item => {
        if (item.indexOf('=') > -1) {
            let temp = item.split('=');
            let key = temp[0];
            let value = decodeURIComponent(temp[1])

            try {
                value = JSON.parse(value);
            } catch(err) {
                // console.log(err)
            }

            if (key.indexOf('[]') > -1) {
                key = key.replace('[]', '');
                if (!result[key]) {
                    result[key] = [];
                }
                result[key] = [].concat(result[key], value);
            } else {
                result[key] = value;
            }
        }
    })


    return result;
}
let url = 'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D';
console.log(queryString(url))
// console.log(JSON.parse("{"str":"abc","num":123}"))


/**
 * ## 问题3
 * 将48位的时间位图格式化成字符串
 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。
 * 
 * 规则描述：
 * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
 * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 * 
 * 示例输入：`"110010000000000000000000000000000000000000000000"`
 * 示例输出：`["00:00~01:00", "02:00~02:30"]`
 */

function timeBitmapToRanges(str) {
    let result = [];
    let map = {};
    let count = 0;


    let strs = str.split('').map(item => +item);

    for(let i = 0; i <= strs.length; i++) {
        if (strs[i]) {
            count++;
        }

        if (!strs[i] && strs[i-1]) {
            map[i] = count;
            count = 0;
        }
    }

    let getTimeStr = (start, end) => {
        let startTime = (start/2).toFixed(1).split('.');
        let endTime = (end/2).toFixed(1).split('.');

        let formatTime = (time, ignoreHour = false) => {
            !ignoreHour && (time = time ===  '5' ? 30 : time);

            return time > 10 ? time : `0${time}`
        }

        return `${formatTime(startTime[0], true)}:${formatTime(startTime[1])}~${formatTime(endTime[0], true)}:${formatTime(endTime[1])}`
    }

    for(let j in map) {
        result.push(getTimeStr(j - map[j], +j))
    }

    return result;
}

// console.log(timeBitmapToRanges('110010000100000000000000000000000000000000000000'))