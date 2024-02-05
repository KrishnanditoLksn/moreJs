let mhs = {
    name: 'Dito baru',
    energy: 100,
    eat: function (porsi) {
        this.energy = this.energy + porsi
        console.log("Hello dito , selamat makan ")
    }
}

//Function declaration

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {}
//     mahasiswa.name = nama
//     mahasiswa.energy = energi
//
//     mahasiswa.makan = function (porsi) {
//         this.energy = this.energy + porsi
//         console.log(`Hello ${nama} , selamat makan `)
//     }
//
//     mahasiswa.main = function (jam) {
//         this.energy -= jam
//         console.log(`Helllo ${nama} , energi mu berkurang ${energi} dengan jam ${jam}`)
//     }
//
//     return mahasiswa
// }
//
// // console.log(mhs)
//
// let dito = Mahasiswa('Dito', 10)
// console.log(dito)
//
// dito.main(100)


//Constructor Function
function Mahasiswa2(nama, energi) {
    this.name = nama
    this.energy = energi

    this.makan = function (porsi) {
        this.energy = this.energy + porsi
        console.log(`Hello ${nama} , selamat makan dari deklarasi constructor `)
    }

    this.main = function (jam) {
        this.energy -= jam
        console.log(`Helllo ${nama} , energi mu berkurang ${energi} dengan jam ${jam}`)
    }
}

//Instansiasi menggunakan constructor
let mhs2 = new Mahasiswa2('Dito', 100)
console.log(mhs2)
mhs2.makan(10)
