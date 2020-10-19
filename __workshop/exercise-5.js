function exercise5() {
    // Exercise 5
    // Fix this program
    //
    // Expected Output
    // It should output all of the odd numbers between 1 and 25 (including 1 and 25)
    //
    // Edit only the code between the lines (below)
    // -----------------------------------------------------------------


    for (let number = 0; number < 26; number++) {
        if (number % 2 !== 0) {
            console.log(number);
        }
    }



    // -----------------------------------------------------------------
    // Edit only the code between the lines (above)
    //
    //
    //
    //
    //
    //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-5

module.exports = exercise5;