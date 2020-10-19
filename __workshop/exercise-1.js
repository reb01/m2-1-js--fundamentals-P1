// Types

function question1() {
    // Question 1:
    // Which of the following strings are valid?
    // Add an 'x' between the ( ) to indicate that it's valid.
    // e.g. --> console.log("0. (x)"); /* "example string" */

    console.log("1.1. ( )"); /* "I am a "Horse""    */
    console.log("1.2. ( )"); /* "I 'prefer' ducks'  */
    console.log("1.3. (x)"); /* 'Yes, duck is nice' */
    console.log("1.4. (x)"); /* "Ah, but I\'m vegan!" */
    console.log("1.5. ( )"); /* 'You'll eat salad then' */
    console.log("1.6. (x)"); /* 'Yes I\'ll eat salad' */
    console.log("1.7. (x)"); /* "I'm happy to hear that!" */
    console.log("1.8. (x)"); /* "\"Happy to hear " + 'that" ' + "he says!" */
    console.log("1.9. ( )"); /* “Hello world!” */
}

function question2() {
    // Question 2:
    // Which of the following expressions evaluate to true?
    // Add an 'x' between the ( ) to indicate that it's true.

    console.log("2.1. ( )"); /* 7 == 2    */
    console.log("2.2. (x)"); /* 7 == 7    */
    console.log("2.3. (x)"); /* 7 == '7'  */
    console.log("2.4. (x)"); /* 7 != 0    */
    console.log("2.5. (x)"); /* 7 !== '7' */
    console.log("2.6. ( )"); /* 7 != '7'  */
    console.log("2.7. ( )"); /* 7 != 7    */
}

function question3() {
    // Question 3:
    // Which of the following expressions are truthy?

    console.log("3.1. (x)"); /* !0         */
    console.log("3.2. ( )"); /* !1         */
    console.log("3.3. (x)"); /* -1         */
    console.log("3.4. ( )"); /* !"hello!"  */
    console.log("3.5. ( )"); /* null       */
    console.log("3.6. (x)"); /* !undefined */
    console.log("3.7. (x)"); /* !NaN       */
}

function question4() {
    // Question 4:
    // Which of the following are valid objects?

    console.log("4.1. ( )"); /* {}                                       */
    console.log("4.2. ( )"); /* { 'hello' }                              */
    console.log("4.3. (x)"); /* { name: 'I am fruit' }                   */
    console.log("4.4. (x)"); /* {'brand-name': 'Dior' }                  */
    console.log("4.5. ( )"); /* { brand-name: 'Channel' }                */
    console.log("4.6. (x)"); /* { cool_name: 'bob' + ' Dylan', age: 25 } */
}

function question5() {
    // Question 5:
    // For each array, specify the number of elements in the array
    // and the type of each element in the provided array.

    // 5.1. ['cat', 42, 'bird']
    console.log("5.1. Number of elements (3)", ["string", "number", "string"]);

    // 5.2. [[], 24, 'hello', true]
    console.log("5.2. Number of elements (4)", ["array", "number", "string", "boolean"]);

    // 5.3. []
    console.log("5.3. Number of elements (0)", []);

    // 5.4. [['romeo', 'juliet'], false]
    console.log("5.4. Number of elements (2)", ["array", "boolean"]);

    // 5.5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]
    console.log("5.5. Number of elements (2)", ["object", "object"]);
}

function question6() {
    // Question 6:
    // What is the type and value for each of the following variables?
    // e.g. console.log("6.1.", <TYPE>, <VALUE>)

    // 6.1. let name = 'bob';
    console.log("6.1.", "string", "bob");

    // 6.2. let age = 45;
    console.log("6.2.", "number", 45);

    // 6.3. let isMarried = false;
    console.log("6.3.", "boolean", false);

    // 6.4. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
    console.log("6.4.", "array", [
        { name: "Morty", age: 3 },
        { name: "Summer", age: 7 },
    ]);
}
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-1

module.exports = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
};