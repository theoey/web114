//Joseph Harris switch.js 11/1/26

"use strict";

let favMonth = prompt("What is your favorite month?");

//error checking
if (favMonth === "")
{
    alert(`Please put in favorite month`);
    favMonth = prompt("What is your favorite month?");
}

switch(favMonth.toLowerCase())
{
   case "march": 
   case "april":
   case "may":
        confirm("Spring is nice with everything blooming.");
        console.log(`correct answer`);
        break;
    case "june": 
    case "july": 
    case "august":
        confirm("You enjoy the summer months!");
        break;
    case "september": 
    case "october": 
    case "november":
        confirm("Fall is fun with all of the pretty colors!");
        break;
    case "december": 
    case "january": 
    case "february":
        confirm("You love the winter months!");
        break;
    default:
        confirm("Other months are interesting too");
        console.log(`Unexpected answer`);
}