function exercise9() {
    // Exercise 9
    //
    // Write a program that goes through every number from 1 to 100, and follows the following rules:
    //   - If the number is divisible by 3 (eg. 6), print "Fizz"
    //   - If the number is divisible by 5 (eg. 10), print "Buzz"
    //   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
    //   - For all other numbers, print the number itself.
    // e.g.
    //
    // 1
    // 2
    // Fizz
    // 4
    // Buzz
    // Fizz
    // 7
    // 8
    // Fizz
    // Buzz
    // 11
    // Fizz
    // 13
    // 14
    // FizzBuzz
    // 16
    // ...
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------


    for (let number = 1; number <= 100; number++) {
        // define a new variable and assign it the value of the current number
        let printNum = number;

        // If the number is divisible by 5, replace with 'Buzz'
        if (number % 5 === 0) {
            printNum = `Buzz`;
        }

        // If the number is divisible by 3, replace with 'Fizz'
        // this will also replace any Buzz value.
        if (number % 3 === 0) {
            if (number % 5 === 0) {
                printNum = `FizzBuzz`;
            } else {
                printNum = `Fizz`;
            }
        }

        console.log(printNum);
    }






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
// yarn test exercise-9

module.exports = exercise9;