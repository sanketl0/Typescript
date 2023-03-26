function percentage(marks, outof) {
    if (outof === void 0) { outof = 500; }
    var ans = 0;
    ans = (marks / outof) * 100;
    return ans;
}
var ret = 0;
ret = percentage(220, 300);
console.log("Percentage is :" + ret);
ret = percentage(220);
console.log("Percentage is :" + ret);
