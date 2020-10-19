function exercise6_3() {
    // Exercise 6.3
    //
    // Write a loop that will print to the console
    // all of the EVEN integers from 1 to 50.
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
    for (let x = 1; x < 51; x++) {
        if (x % 2 === 0) {
            console.log(x);
        }
    }
    // Write code between the lines (above)
    //
    //
    //
    //
    //
    //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-6.3

module.exports = exercise6_3;