/*
123 => 321
450 => 54
-78 => -87
不能使用字符串
*/ 
function numTransform(num) {
    let result = 0;
    
    while(num) { // 123 12 1 
        result = result*10 + num % 10  // 3 321
        num = parseInt(num / 10) // 12 1 
    }
    
    
    return result;
}
console.log(numTransform(-78))

/*
请实现一个cacheRequest方法，保证当使用ajax(请求相同资源时，此题中相同资源的判断是以url为判断依据)，真实网络层中，实际只发出一次请求（假设已存在request方法用于封装ajax请求，调用格式为：
``request(url, successCallback, failCallback)``）

比如调用方代码（并行请求）如下

```javascript
cacheRequest('/user', data => {
console.log('请求的user，数据为' + data);
})

cacheRequest('/user', data => {
console.log('请求的user，数据为' + data);
})
```

*/

let map = {
}
function cacheRequest(url, successCallback, failCallback) {
    if (map[url] && map[url].data) {
        return successCallback(map[url].data);
    }
    
    if (map[url] && map[url].err) {
        return failCallback(map[url].err);
    }
    
    
    
    
    let resolve = (data) => {
        map[url].data = data;
        while(map[url]['resolve'].length) {
            let callback = map[url]['resolve'].pop();
            callback(data)
        }
    }
    
    let reject = (err) => {
        map[url].err = err;
        while(map[url]['reject'].length) {
            let callback = map[url]['reject'].pop();
            callback(data)
        }
    }
    
    
    if (map[url]) {
        map[url]['resolve'].push(successCallback)
        map[url]['reject'].push(failCallback)
    } else {
        map[url] = {
            resolve: [successCallback],
            reject: [failCallback]
        }
        
        request(url, resolve, reject)        
    }
}


cacheRequest('/user', data => {
console.log('请求的user，数据为' + data);
})

cacheRequest('/user', data => {
console.log('请求的user，数据为' + data);
})