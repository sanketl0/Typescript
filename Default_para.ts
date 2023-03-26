
function percentage(marks : number , outof : number = 500) : number
{
    let ans : number = 0;
    ans = (marks/outof)*100
    return ans
}

var ret : number = 0

ret = percentage(220,300)
console.log("Percentage is :"+ret)

ret = percentage(220)
console.log("Percentage is :"+ret)











