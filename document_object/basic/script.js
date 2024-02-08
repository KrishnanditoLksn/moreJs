//Mengambil elemen berdasarkan id
const judul = document.querySelector('#judul');
//Ubah warna judul
judul.style.color = "green"

//karena p merupakan html koleksi  , maka untuk memanipulasinya maka harus dengan array
const p = document.querySelectorAll('p')
p[0].style.backgroundColor = 'green'

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'green'
}

const h1 = document.getElementsByTagName('h1')
h1[0].style.color = 'red'

const ul = document.getElementsByClassName('p1')
ul[0].style.color = 'red'
ul[0].innerHTML = "Dito Laksana"

const li = document.querySelectorAll('li')
li[1].style.backgroundColor = "brown"
li[2].style.backgroundColor = "orange"


//mengubah Node root
const sectionA = document.getElementById('b');
//mengganti warna yang ada di sectionnya
const p4 = sectionA.querySelector('p');
p4.style.backgroundColor = "yellow";
sectionA.style.backgroundColor = 'blue'