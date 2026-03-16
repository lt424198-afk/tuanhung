function openPage(page){

document.querySelectorAll("section").forEach(s=>{
s.style.display="none"
})

document.getElementById(page).style.display="block"

}

document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark")

}
