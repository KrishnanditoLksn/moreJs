//Object literal
let mhs1 = {
    name: 'Dito',
    nim: 225314024
}

export let obj1 = {}
obj1.hello = function () {
    console.log('halo')
}


let mhs2 = {
    name: 'Vito',
    nim: 2253140102
}

export function gula() {
    console.log("aku mengeskpor gula ")
}

//Function declaration
function buatObjectMahasiswa(nama, nim) {
    let mhs = {};
    mhs.name = nama
    mhs.nim = nim
    //Return object
    return mhs
}

let mhs3 = buatObjectMahasiswa('Muklis', 2253140109)

console.log(mhs3)

//Constructor
function Mahasiswa(
    name, nim
) {
    this.name = name
    this.nim = nim
}


let mhs4 = new Mahasiswa('Dito', 225314024)
console.log(mhs4)

function Hello() {
    console.log(this)
    console.log('Hello')
}

let h1 = new Hello()
console.log(h1)

/*
keyword this mengembalikan object yang baru dibuat
 */