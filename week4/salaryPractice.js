"use strict";

const major = prompt("What is your major?").toLowerCase();

if (major === "computer science" || major === "software development")
{
    console.log("Your major involves a lot of problem-solving and technical skills!");
}
else if (major.includes("arts")) || major === "english");
{
    console.log("Your major focuses on creativty, communication, and critical thinking!");
}
else {
    console.log("That's an interesting major! I hope you enjoy it!");
}

let desiredSalary = prompt("What is your desired salary?");

if (desiredSalary > 50000 && (major === "computer science" || major === "software development"))
{
    console.log("you have a technical mind!");
}
