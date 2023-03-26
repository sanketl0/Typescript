function Addition(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var week = [10, 20, 30, 40, 50];
var ret = 0;
ret = Addition(week);
console.log("Addition is :" + ret);
