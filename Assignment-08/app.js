let randomNumber = Math.floor(Math.random() * 10) + 1

var attempts = 0;
var maxattempts = 3;

while(attempts < maxattempts){
    let userNumber = +prompt("Enter Number b/w 1 & 10")
    attempts++
    if(userNumber === randomNumber){
        alert("Congragulation! You Won \nThe number is: " + randomNumber)
        break;
    }
    else{
        if(attempts < maxattempts){
            if(userNumber > randomNumber){
                alert("Your Number Is Too High")
            }
            else{
                alert("Your Number Is Too Low")
            }
        }
        else{
            alert("Game Over!\n The correct number was:   " + randomNumber);
        }
    }
}





