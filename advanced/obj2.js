function Mahasiswa(nama, energi) {
    // let mahasiswa = Object.create(methodMhs)
    this.name = nama
    this.energy = energi
}

// const methodMhs = {
//     makan: function (porsi) {
//         this.energy = this.energy + porsi
//         console.log(`Hello ${this.name} , selamat makan `)
//     },
//
//     main: function (jam) {
//         this.energy -= jam
//         console.log(`Helllo ${this.name} , energi mu berkurang  dengan jam ${jam}`)
//     }
// }


//Membuat objek dengan prototipe
Mahasiswa.prototype.main = function (jam){
    this.energy -=jam
    return `Halo ${this.name} , selamat makan , energimu ${this.energy}`
}


export  let dito = new Mahasiswa('Dito', 100)
console.log(dito.main(10))
// dito.makan(20)

