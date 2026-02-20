

function changeText(){
const heading =  document.getElementById("text")
heading.innerText = "Hello Dom"
}


function updateText(){
    const heading = document.getElementById("para")
    heading.innerText = "Text updated using DOM"
}


function showName() {
const input = document.querySelector("#name").value

const para = document.querySelector("#result")
para.innerText = input
console.log(para.innerText);

}


function delayedgreeting(){
   const msg =   document.querySelector("#msg")
   msg.innerText = "Welcome To JavaScript";

}

setTimeout(delayedgreeting,2000)




function changeMessage(){
    document.querySelector("#message").innerText = "Button Clicked"
}


