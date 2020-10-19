function exercise11() {
    // Exercise 11
    //
    // Write a program that creates a string that represents an 8×8 grid,
    // using newline characters to separate lines. At each position of the grid
    // there is either an "_" or a "#" character. The characters should form a chessboard.
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
    let board = "";
    for (let y = 1; y <= 8; y++) {
        for (let x = 1; x <= 8; x++) {
            if ((x + y) % 2 == 1) {
                board += "_";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);

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
// yarn test exercise-11

module.exports = exercise11;