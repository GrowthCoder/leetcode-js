// 微店笔试题大数想加
function bigNumAdd(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let ret = '';

    while(i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;

        if (i >= 0) {
            // 转为number
            x = a[i] - '';
            i--;
        }

        if (j >= 0) {
            y = b[j] - '';
            j--;
        }

        sum = x + y + carry;

        // 大于10 减去
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }

        // 按顺序加和
        ret = sum + ret;
    }

    if (carry) {
        ret = ret + carry;
    }

    return ret;
}