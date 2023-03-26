// rest paremeters : variable number of arguments
function Addition() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var ret = 0;
ret = Addition(10, 20);
console.log("Addition is :" + ret);
ret = Addition();
console.log("Addition is :" + ret);
ret = Addition(10, 20, 30, 40);
console.log("Addition is :" + ret);
ret = Addition(10, 20, 30, 40, 50, 60);
console.log("Addition is :" + ret);
