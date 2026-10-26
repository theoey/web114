"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0 */

let score = 0;

/*2. Question 1: [Your question here-- see questions below}

    -Variable name personalized to question (no answer1) question1answer
   - Correct answer: 8
   - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does not equal answer, alert wrong, else alert correct

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?
# of correct questions divided by total questions

7. Final feedback logic (if / else if / else): */

//Question 1
/*  -Variable name personalized to question (no answer1) question1answer
   - Correct answer: 8
   - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does strictly equal answer, alert correct, else alert wrong*/
const question1 = prompt('What is 5 + 3?', '');
console.log(`You answered: ${question1}`);
const answer1 = Number(8);
if (question1 == answer1) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong!");
}


// Question 2
/*  -Variable name personalized to question (no answer1) question2answer
   - Correct answer: 6
    - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does strictly equal answer, alert correct, else alert wrong*/
let question2 = prompt('What is 10 - 4 =', '');
console.log(`You answered: ${question2}`);
const answer2 = 6;
if (question2 == answer2) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong!");
}

// Question 3
/*  -Variable name personalized to question (no answer1) question3answer
   - Correct answer: 12
   - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does strictly equal answer, alert correct, else alert wrong*/
let question3 = prompt('What is 4 x 3 =', '');
console.log(`You answered: ${question3}`);
const answer3 = 12;
if (question3 == answer3) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong!");
}

// Question 4
/*  -Variable name personalized to question (no answer1) question4answer
   - Correct answer: 4
     - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does strictly equal answer, alert correct, else alert wrong*/
let question4 = prompt('What is 20 / 5 = ', '');
console.log(`You answered: ${question4}`);
const answer4 = 4;
if (question4 == answer4) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong!");
}


// Question 5
/*  -Variable name personalized to question (no answer1) question5answer
   - Correct answer: 10
   - How I'll validate and check the answer : create a const variable w/correct answer and then 
   do if question does strictly equal answer, alert correct, else alert wrong*/
let question5 = prompt('What is my favorite kind of pizza?', '');
console.log(`You answered: ${question5}`);
const answer5 = "mushroom";
if (question5 == answer5) {
    alert("Correct!");
    score++;
} else {
    alert("Wrong!");
}


// Calculate percentage using math
alert(`You're score is ${score} out of 5!`)
let results = score / 5;

// Final feedback using if / else if / else

if (results == 0) {
    alert('Zero, so sad');
} else if (results == .6){
    alert('About average');
    console.log(`Right in the middle`);
} else {
    alert('Perfect!');    
}

//If statement that uses an alert statement about their score

// Final summary alert 