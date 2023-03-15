function DisplayFactors(no :number):void
{   
    for( let i =1; i<=no;i++)
    {
        if(no % i==0)
        {
           console.log(i)
        }
    }
    
}
console.log("Factors are:")
DisplayFactors(20)
