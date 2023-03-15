function Fibonacci(num: number): void 
{
    let a: number = 0
    let b: number = 1
    let c: number = 0
    
    console.log("Fibonacci Series: ")
    
    while (c <= num) 
    {
      console.log(c)
      a = b
      b = c
      c = a + b
    }
  }

  Fibonacci(21)