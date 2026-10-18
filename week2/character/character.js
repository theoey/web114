"use strict";
//step 2

//step 3
alert(`Welcome to Forbidden Greens, a haunted forest! Help bring light to the kingdom!`);

//step 5
const charName = prompt(`"What is your name, visitor? `, ["Ironstorm"]);

//step 6
const petName = prompt(`What is your pet name? `, ["Rex"])

//step 7
const superpower = prompt(`What superpower do you have?`, ["Invisibility"]);

//step 8
const trainingYears = prompt(`How many years have you been training? `, [10]);
const years = Number(trainingYears);
console.log("trainingYears:", trainingYears, typeof trainingYears);
console.log("years", years, typeof years);

const powerLevel = years * 10;
console.log("powerLevel", powerLevel, typeof powerLevel);

//step 9
const fightMonsters = confirm(`Does ${charName} like fightng monsters? 
    Click OK for Yes 
    Click Cancel for NO`)
console.log("fightMonsters", fightMonsters, typeof fightMonsters);


//step 10
alert(`Gathering magic for ${charName}...almost ready!`);

//step 11
let finalStory = alert(`=========================
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superpower}
    Power Level: ${powerLevel}
    Monster fighter: ${fightMonsters}

    In Forbidden Greens, a hero named ${charName} and 
    his trusty companion ${petName} battle evil
    with the power of ${superpower}! 
    With a power level of ${powerLevel}, 
    they seek to bring light to the kingdom!

    =======================`);