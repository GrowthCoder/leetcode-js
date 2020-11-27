function timeBitmapToRanges(timeBitmap) {
    let count = 0;
    let range = {};
    let result = [];
    let strs = timeBitmap.split('').map(item => +item);

    if (!timeBitmap) {
        return [];
    }

    for(let i = 0; i <= strs.length; i++) {
        if (strs[i]) {
            count++;
        }

        if (!strs[i] && strs[i-1]) {
            range[i] = count;
            count = 0;
        }
    }

    let format = (start, end) => {
        let startTime = (start / 2).toFixed(1);
        let endTime = (end / 2).toFixed(1);
        let startInfos = startTime.split('.');
        let endInfos = endTime.split('.');

        let formatTime = (time, isHour = false) => {
            !isHour && (time = time === '5' ? '30' : time); 
            return time > 10 ? time : `0${time}`;
        }

        return (
            `${formatTime(startInfos[0], true)}: ${formatTime(startInfos[1])}~${formatTime(endInfos[0], true)}: ${formatTime(endInfos[1])}`
        )
    }

    for (let j in range) {
        result.push(format(j - range[j], +j))
    }
    return result;
}

// console.log(timeBitmapToRanges('110010001010000000011100000000000000000011111111'))

// url format
//解析url，参数会有字符串、数组、json string，复杂类型会encode后放入url
let parseParam = (url) => {
    let paramsArray = url.slice(url.indexOf('?') + 1).split('&');
    let paramsObj = {};
    paramsArray.forEach((item) => {
        if (item.indexOf('=') > -1) {
            let [key, value] = item.split('=');
            value = decodeURIComponent(value);
            if (paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key],value);
            } else {
                paramsObj[key] = value;
            }
        } else {
            paramsObj[item] = true;
        }
    })
    return paramsObj;
};

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&b[0]=2&b[1]=3&aaa={a:1}&enabled';
console.log(parseParam(url))