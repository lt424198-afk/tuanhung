let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function renderTasks(){

let list=document.getElementById("taskList")

if(!list) return

list.innerHTML=""

tasks.forEach((task,index)=>{

let li=document.createElement("li")

li.textContent=task.text

if(task.done){

li.style.textDecoration="line-through"

}

li.onclick=function(){

tasks[index].done=!tasks[index].done
saveTasks()

}

list.appendChild(li)

})

}

function addTask(){

let input=document.getElementById("taskInput")

if(!input.value) return

tasks.push({

text:input.value,
done:false

})

input.value=""

saveTasks()

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks))

renderTasks()

}

renderTasks()
