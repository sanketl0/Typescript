
// here PI is optional parameters...

function area(radius : number, PI ? : number) : number
{
    let ans : number = 0

    if (PI == undefined)
    {
        PI = 3.14
    }

    ans = PI * radius * radius

    return ans
}


var ret : number = 0

ret = area(20.3,3.14)

console.log("Area is : "+ret)


ret = area(20.3)
console.log("Area is :"+ret)


