function exercise6_4() {
    // Exercise 6.4
    //
    // Write a loop that will print to the console
    // all of the EVEN integers from 36 to 0.
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
    for (let y = 36; y >= 0; y--) {
        if (y % 2 === 0) {
            console.log(y);
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
// yarn test exercise-6.4

module.exports = exercise6_4;