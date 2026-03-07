function currenttime(){
    const h1 = document.querySelector(".clock")
const now = new Date()

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let currentTime = ` ${h}:${m}:${s}`


h1.textContent = currentTime    

}

setInterval(currenttime, 1000)





