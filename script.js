let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");
li.textContent=task.text;

if(task.done){
li.classList.add("done");
}

li.onclick=function(){
tasks[index].done=!tasks[index].done;
saveTasks();
}

list.appendChild(li);

});

}

function addTask(){

let input=document.getElementById("taskInput");

if(input.value===""){
alert("Hãy nhập bài tập");
return;
}

tasks.push({
text:input.value,
done:false
});

input.value="";

saveTasks();

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

renderTasks();

}

document.getElementById("darkModeBtn").onclick=function(){
document.body.classList.toggle("dark");
}

renderTasks();
