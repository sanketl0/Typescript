function Area(no : number ):number
{
    var Ans : number = 0
    var PI = 3.14
    Ans = PI *no*no
    return Ans
}



var ret : number = 0
ret = Area(5)

console.log("Area of square is :"+ret)