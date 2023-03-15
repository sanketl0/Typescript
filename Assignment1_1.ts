function Maximum(no1 : number , no2 : number , no3 : number):void
{
    if (no1 > no2 && no1 > no3)
    {
        console.log("Maximum number is :"+no1)
    }
    else if (no2 > no1 && no2 > no3)
    {
        console.log("Maximum number is : "+no2)
    }
    else 
    {
        console.log("Maximum  number is : "+no3)
    }
}

var A = 23
var B = 89 
var C = 6

Maximum(A,B,C)