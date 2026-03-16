function toggleMode(){

document.body.classList.toggle("dark")

}

function addTask(){

let input=document.getElementById("taskInput")

let li=document.createElement("li")

li.innerHTML=input.value+" <button onclick='this.parentElement.remove()'>X</button>"

document.getElementById("taskList").appendChild(li)

}

let time=1500

let interval

function startTimer(){

interval=setInterval(()=>{

time--

let m=Math.floor(time/60)

let s=time%60

document.getElementById("timer").innerText=

String(m).padStart(2,"0")+":"+

String(s).padStart(2,"0")

},1000)

}

function resetTimer(){

clearInterval(interval)

time=1500

document.getElementById("timer").innerText="25:00"

}

function calculate(){

let val=document.getElementById("calc").value

document.getElementById("result").innerText=eval(val)

}

function updateProgress(){

let val=document.getElementById("progressInput").value

document.getElementById("progress").style.width=val+"%"

}
function toggleMode(){

document.body.classList.toggle("dark")

}
function toggleMode(){

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

localStorage.setItem("mode","dark")

}else{

localStorage.setItem("mode","light")

}

}

if(localStorage.getItem("mode")==="dark"){

document.body.classList.add("dark")

}
function renderNotes(){

let list=document.getElementById("noteList")

list.innerHTML=""

notes.forEach((n,i)=>{

let li=document.createElement("li")

li.className="note-item"

li.innerHTML=`
<span class="${n.star?'starred':''}">${n.text}</span>
<div>
<button onclick="toggleStar(${i})">⭐</button>
<button onclick="deleteNote(${i})">🗑</button>
</div>
`

list.appendChild(li)

})

}
