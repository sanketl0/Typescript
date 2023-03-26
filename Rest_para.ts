
// rest paremeters : variable number of arguments

function Addition(...Arr : number[])
{
    let sum : number = 0
    let cnt : number =0

    for (cnt = 0; cnt < Arr.length; cnt++)
    {
        sum = sum + Arr[cnt]
    }
    return sum
}


var ret : number = 0

ret = Addition(10,20)
console.log("Addition is :"+ret)

ret = Addition()
console.log("Addition is :"+ret)

ret = Addition(10,20,30,40)
console.log("Addition is :"+ret)

ret = Addition(10,20,30,40,50,60)
console.log("Addition is :"+ret)