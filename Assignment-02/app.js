var marks = +prompt("Enter Your Marks:");

if(marks >=80 && marks<=100){
    console.log("Your Grade is A+");
}
else if(marks >=70 && marks<=80){
    console.log("Your Grade is A");
}
else if(marks >=60 && marks<=70){
    console.log("Your Grade is B");
}
else if(marks >=50 && marks<=60){
    console.log("Your Grade is C");
}
else if( marks >=0 && marks <=50){
    console.log("You Are Fail");
}
else {
    console.log("You Entered Invalid Number");
}

console.log("--------------------------------------")

var age = +prompt("Enter Your Age:");

if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote")
}

console.log("--------------------------------------")

var t = +prompt("Enter Temperature:");

if(t>30){
    console.log("It's hot");
}
else{
    console.log( "Weather is normal");
}

console.log("--------------------------------------")


var passwordLength = 9;

  if (passwordLength >= 8) {
    console.log("Strong password");
  } else {
    console.log("Weak password");
  }


console.log("--------------------------------------")

var num = +prompt("Enter Number:");

if(num>50){
    console.log("Number Is bigger");
}