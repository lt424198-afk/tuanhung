const ctx=document.getElementById("chart")

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Study Time",

data:[2,3,4,2,5,6,3],

borderColor:"#4f9cff",

tension:0.4

}]

},

options:{

plugins:{
legend:{
display:false
}
},

scales:{
y:{
beginAtZero:true
}
}

}

})

}
