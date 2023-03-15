function Chkprime(no) {
    if (no > 1) {
        for (var i = 2; i <= no; i++) {
            if (no % i == 0) {
                return ("It is not prime number:");
            }
            else {
                return ("It is a prime number");
            }
        }
    }
}
console.log(Chkprime(11));
