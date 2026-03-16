function showPage(id){

document.querySelectorAll(".page").forEach(p=>{

p.classList.add("hidden")

})

document.getElementById(id).classList.remove("hidden")

}

document.getElementById("darkBtn").onclick=function(){

document.body.classList.toggle("dark")

}
