/*
    https://leetcode-cn.com/problems/compare-version-numbers/submissions/
    diffVersion(version1, version2) {}
    版本号可能是7.5.0或者1.12这种格式，输出大的版本号
*/ 

function diffVersion(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let result = 0;
    let len = Math.min(arr1.length, arr2.length);

    for(let i = 0; i < len; i++) {
        if (Number(arr1[i]) > Number(arr2[i])) {
            result = 1;
            break;
        } else if (Number(arr1[i]) < Number(arr2[i])) {
            result = -1;
            break;
        }
    }

    if (!result) {
        if (version1.length > version2.length) {
            result = arr1.slice(len, arr1.length).some(item => Number(item)) ? 1 : 0;
        } else {
            result = arr2.slice(len, arr2.length).some(item => Number(item)) ? -1 : 0;
        }
    }
    return result
}
console.log(diffVersion('1.0', '1.0.0'))