let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function render(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((t,i)=>{

let li=document.createElement("li")

li.textContent=t.text

if(t.done){

li.classList.add("done")

}

li.onclick=function(){

tasks[i].done=!tasks[i].done

save()

}

list.appendChild(li)

})

document.getElementById("taskCount").innerText=tasks.length

document.getElementById("doneCount").innerText=

tasks.filter(t=>t.done).length

}

function addTask(){

let input=document.getElementById("taskInput")

tasks.push({

text:input.value,

done:false

})

input.value=""

save()

}

function save(){

localStorage.setItem("tasks",JSON.stringify(tasks))

render()

}

render()
