"use strict";

let test1 = 95;
let test2 = 56;

let compareTest1 = test1 > test2;
let compareTest2 = test1 < test2;

console.log(`Is test 1 greater than test 2? ${compareTest1}`);
console.log(`Is test 1 less tahn test 2? ${compareTest2}`);

compareTest1 = test1 >= test2;
compareTest2 = test1 <= test2;

console.log(`Is test 1 greater than or equal to test 2? ${compareTest1}`);
console.log(`Is test 1 less tahn or equal to test2? ${compareTest2}`);

let done = "done";
let DONE = "DONE";

let caseSensitive = done == DONE;

console.log(`Is "done" the same as "DONE"? ${caseSensitive}`);

console.log(`Is 5 equal to "5"? ${5 == "5"}`);

let englishGrade = 87;
let scienceGrade = 76;

console.log(`
    ------Grade Comparison------

    English Grade: ${englishGrade}
    Science Grade: ${scienceGrade}

    Is English greater than Science? ${englishGrade > scienceGrade}

    Are the grades equal using ==? ${englishGrade == scienceGrade}

    Are the grades strictly equal using === ? ${englishGrade === scienceGrade}

    --------------------
    `);
    

    let scoreA = 90;
    let scoreB = "90";

    console.log(`
       
        Score A: ${scoreA}
        Score B: ${scoreB}

        Are the scores equal using ==? ${scoreA == scoreB}

        Are the scores equal using ===? ${scoreA === scoreB}

        Is scoreA greater than scoreB? ${scoreA > scoreB}
        
        
        `);