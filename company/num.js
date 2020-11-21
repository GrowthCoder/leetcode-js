function convert(money){
    var arr = (money + "").split(".");
    return arr[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + arr[1];
}

console.log(convert(11111111.11))