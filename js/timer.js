let time=1500
let interval

function startTimer(){

clearInterval(interval)

interval=setInterval(()=>{

time--

let m=Math.floor(time/60)
let s=time%60

document.getElementById("time").innerText=
m+":"+(s<10?"0"+s:s)

if(time<=0){

clearInterval(interval)

}

},1000)

}

function resetTimer(){

clearInterval(interval)

time=1500

document.getElementById("time").innerText="25:00"

}
