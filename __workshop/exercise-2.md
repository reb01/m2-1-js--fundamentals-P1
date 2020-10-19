# Question Summary

Oh no! We had a bunch of perfectly-fine code running along smoothly, but then
the Hamburglar swooped in and jumbled our code. We still have all the right
pieces, but they're in the wrong order!

Your mission is to rearrange each line of code so that it forms a coherent
program, and solves the given problem.

_NOTE:_ The lines don't include any indentation (since that would give the
answer away). You should add indentation as appropriate (see example)

_ANOTHER NOTE:_ There may be more than 1 correct answer. If multiple variables
are declared in a row, the order doesn't matter.

_LAST NOTE:_ Feel free to add blank lines between the lines of code, to make it
easier to read. Like the gap between 2. and 1. in the example's solution.

---

## EXAMPLE - log all even numbers

5. for (let i = 0; i < 10; i++) {
2. let isEven = i % 2 === 0;
1. if (isEven) {
3. 
4. console.log(i, 'is an even number!');
6. }}

#### Solution:

```
5. for (let i = 0; i < 10; i++) {
2.   let isEven = i % 2 === 0;
1.   if (isEven) {
3.     console.log(i, 
'is an even number!');
4.   }
6. }
```

## Question 1: Check if the sentence includes the word "Hello".








Put your solution between the ```:
_THIS IS SUPER IMPORTANT_, otherwise Prettier might destroy your solution:

```
4. let sentence = 'Hello world!';
3. if (sentence.includes('Hello')) {
2.   console.log('Sentence DOES contain the word "Hello"');
5. } else {
1.   console.log('Sentence DOES NOT contain the word "Hello"');
6. }

```

## Question 2: Get the specified item in the nested array






```
2. const array = [[1, [2, 3]]];
1. const firstIndex = 0;
4. const secondIndex = 1;
5. const thirdIndex = = 0;
3. console.log(array[firstIndex][secondindex][thirdIndex])
```

## Question 3: Log all numbers from 10 to 5







```
2. let currentNum = 10;
4. let min = 5;
1. while (currentNum > min) {
3.   console.log(currentNum);
5.   currentNum = currentNum - 1;
6. }
```

## Question 4: Reverse the string to check for hidden messages










```

4. const encodedMessage = 'gnidliub gruobuaF eht rednu deirub si erusaert ehT';
3. const letterArray = encodedMessage.split('');
1. const reversedArray = letterArray.reverse();
7. const reversedString = reversedArray.join('');
5. if (reversedString.includes('treasure')) {
2. console.log('Your message:', reversedString)
6. }

```

## Question 5: Add all the numbers from 10 to 0







```
6. let count = 10;
3. let total = 0;
2. while (count > 0) {
4. count = count - 1;
1. total = total + count;
7. }
5. console.log('The total is:', total)
```

## Question 6: Check if the array includes a specific number

1. }
2. let includesNumber;
3. console.log('Array includes the number!')
4. for (let i = 0; i < array.length; i++) {
5. let item = array[i];
6. if (item === numberToSearchFor) {
7. let numberToSearchFor = 5;
8. let array = [1, 3, 7, 4, 5, 2, 1];
9. }




```
8. let array = [1, 3, 7, 4, 5, 2, 1];
7. let numberToSearchFor = 5;
2. let includesNumber;

4. for (let i = 0; i < array.length; i++) {
5.   let item = array[i];
6.   if (item === numberToSearchFor) {
3.     console.log('Array includes the number!')
1.   }
9. }

```
