const books=[

{
title:"Dế Mèn Phiêu Lưu Ký",
img:"https://upload.wikimedia.org/wikipedia/vi/3/3b/DeMen.jpg"
},

{
title:"Hai Vạn Dặm Dưới Đáy Biển",
img:"https://upload.wikimedia.org/wikipedia/commons/7/73/20000Leagues.jpg"
},

{
title:"Không Gia Đình",
img:"https://upload.wikimedia.org/wikipedia/commons/3/36/SansFamille.jpg"
},

{
title:"Hoàng Tử Bé",
img:"https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG"
},

{
title:"Alice Ở Xứ Sở Thần Tiên",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Alice%27s_Adventures_in_Wonderland.jpg"
},

{
title:"Totto-chan Bên Cửa Sổ",
img:"https://upload.wikimedia.org/wikipedia/en/7/7c/Tottochan.jpg"
},

{
title:"Những Cuộc Phiêu Lưu Của Tom Sawyer",
img:"https://upload.wikimedia.org/wikipedia/commons/7/79/Tom_Sawyer_1876_frontispiece.jpg"
},

{
title:"Đảo Giấu Vàng",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3b/TreasureIsland.jpg"
}

]

const container=document.getElementById("books")

function showBooks(list){

container.innerHTML=""

list.forEach(b=>{

container.innerHTML+=`

<div class="card">

<img src="${b.img}">

<h3>${b.title}</h3>

<a href="ketquatruyen.html?name=${b.title}">Xem truyện</a>

</div>

`

})

}

showBooks(books)

document.getElementById("searchInput").addEventListener("input",function(){

let value=this.value.toLowerCase()

let filtered=books.filter(b=>b.title.toLowerCase().includes(value))

showBooks(filtered)

})
