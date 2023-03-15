function Chkprime(no : number ):string
{
    if (no > 1)
    {
        for (let i = 2; i <= no; i++)
        {
            if (no % i ==0)
            {
                
                return ("It is not prime number:")
                
            }
            else
            {
                
                return("It is a prime number")
                
            }
        }
    }
    
}

console.log(Chkprime(11))