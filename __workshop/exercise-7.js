function exercise7() {
    // Exercise 7
    //
    // Life in the army is regimented!
    // Write a loop that will output every hour of the day (0 to 23) and
    // determine whether it is time to sleep, eat or train.
    //
    // These are the hours alloted to each activity.
    // - Sleep between 22h and 5h
    // - Eat at 6h, 12h and 18h
    // - The rest of the time is spent training.
    //
    // Expected Output
    // ...
    // It's 10h. Time to train!
    // It's 11h. Time to train!
    // It's 12h. Time to eat!
    // It's 13h. Time to train!
    // ...
    //
    // Use interpolation to build your output string
    // e.g. `It's ${number}h. Time to train!`
    //
    // Write code between the lines (below)
    for (let hour = 0; hour < 24; hour++) {
        let activity = "train";

        if (hour === 6 || hour === 12 || hour === 18) activity = "eat";
        if (hour < 6 || hour > 21) activity = "sleep";

        console.log(`It's ${hour}h. Time to ${activity}!`);
    }


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
// yarn test exercise-77

module.exports = exercise7;