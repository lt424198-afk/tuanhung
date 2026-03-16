const ctx=document.getElementById("studyChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Study Time",

data:[2,3,1,4,2,5,3]

}]

}

})
