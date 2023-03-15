function Maximum(no1, no2, no3) {
    if (no1 > no2 && no1 > no3) {
        console.log("Maximum number is :" + no1);
    }
    else if (no2 > no1 && no2 > no3) {
        console.log("Maximum number is : " + no2);
    }
    else {
        console.log("Maximum  number is : " + no3);
    }
}
var A = 23;
var B = 8;
var C = 65;
Maximum(A, B, C);
