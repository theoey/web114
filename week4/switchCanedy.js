let favoriteCandy = prompt("What is your fav candy?");

//error checking

if (favoriteCandy === "")
{
    alert(`Please enter a candy`);
    favoriteCandy = prompt(`What is your favorite candy?`);
}

//cases for entries
//favoriteCandy = favoriteCandy.trim();
switch(favoriteCandy.trim().toLowerCase())
{
    case "skittless":
        confirm("Taste the rainbow!");
        break;
    case "snickers":
        confirm("Satisfy your cravings!");
        break;
    case "twix":
        confirm("left side or right side?");
        break;
    case "reeses":
        confirm("Peanut butter cups, the ultimate combo!");
        break;
    default:
        confirm("That's a unique choice! Enjoy your candy!");
}