let firstCard = 2;
let secoendCard = 11;
let sum = firstCard+secoendCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");


function startGame(){
    cardEl.textContent = "card: "+ firstCard +","+secoendCard;
    sumEl.textContent = "sum: "+sum;   
if (sum <= 20){
    message = "Do you want to draw a new card?";
    
    
}
else if (sum === 21){
    message = "you've got black jack!"
    hasBlackJack = true;
    

    
}

else {
    message = "you're out of game";
    isAlive = false;
   
}
  messageEl.textContent = message;
}

function newCard(){
    console.log("new card button clicked")
}




// let age = 12;

// if (age < 21){
//     console.log("you cannot enter the club")
// }
// else{
//     console.log("welcome to club")
// }

// let personAge = 99;

// if (personAge<100){
//     console.log ("you are not eligible")
// }

// else if (personAge === 100){
//     console.log ("Here is your Birthday Card from the King")
// }

// else {
//     console.log ("Not eligible, you already gotten one")
// }

