function Fibonacci(num) {
    var a = 0;
    var b = 1;
    var c = 0;
    console.log("Fibonacci Series: ");
    while (c <= num) {
        console.log(c);
        a = b;
        b = c;
        c = a + b;
    }
}
Fibonacci(21);
