const exercise13 = require("./exercise-13");

function exercise12() {
    // Exercise 12
    //
    // Write a program that generates a list of all prime numbers from 1 and 200.
    // Prime numbers have exactly two factors.
    // A prime number is a number that is ONLY divisible by 1 and itself.
    //
    // 6 -> NOT prime (2 * 3)
    // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
    // 12 -> NOT prime (3 * 4, 2 * 6)
    // 37 -> PRIME ()
    //
    //
    // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
    //
    // Write code between the lines (below)
    function getPrimes(max) {
        var sieve = [],
            i,
            j,
            primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.join();
    }
    getPrimes("200");
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    // Write code between the lines (above)
    //
    //
    //
    //
    //
    //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12

module.exports = exercise12;