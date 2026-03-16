function generateCalendar(){

let calendar=document.getElementById("calendar")

if(!calendar) return

let date=new Date()

let days=30

for(let i=1;i<=days;i++){

let div=document.createElement("div")

div.className="day"

div.innerText=i

calendar.appendChild(div)

}

}

generateCalendar()
