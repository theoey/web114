//Have someone enter a score and use a switch statement

/* Switch statement info:
The swithc statement compres the grade variable to each case valuees.
-Eachcase value represents a possible score.
-The code block associated with each case displays based on the grade
-If a match is found, the corresdponding block

The break statement is used to exit the switch steatment after a match is found.*/

const grade = parseInt(prompt(`Enter your score:`));
//switch checks for strict equality === between switch values
//this comparison returns a boolean (so we need to test for)

switch (true) {
    case(grade >= 90):
        console.log(`Exclelent job! You got an A.`);
        break;
    case(grade >= 80):
        console.log(`Good job! You got a B!`);
        break;
    case(grade >70):
        console.log(`You got a C. Keep working hard.`);
        break;
    case(grade >= 60):
        console.log(`You got a D. You may want to consider`);
        break;
    case(grade <= 59):
        console.log(`You got an F. Please reach out to your instructure.`);
        break;
    default:
        console.log(`Invalid grade. Please enter a score.`);
}