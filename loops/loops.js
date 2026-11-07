//Joseph Harris 11/6/26

"use strict";

let crate; 

for (crate = 1; crate <= 20; crate++){
    if (crate % 5 === 0){ 
        alert("Handle with care"); //divisble by 5, put alert outside of loop
        console.log("Crate #: ", crate);
        continue;
    } else if (crate % 2 === 0) { //even number alert
        alert("Load crate");
        console.log("Crate #: ", crate);
        continue;
    } else if (crate % 2 !== 0){ //odd number alert
        alert("Inspect crate");
        console.log("Crate #: ", crate);
        continue;
    }

    alert("Inspect crate");
    }

alert("Total crates scanned: " + (crate -1));

