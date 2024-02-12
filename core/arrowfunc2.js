//This arrow function mengacu pada objek
const Mahasiswa = function () {
    this.name = 'Dito'
    this.age = 20
    this.hobby = 'Main game'
    this.getAge = function () {
        //agar bisa terdefisini dan mengacu ke objeknya  , pakai keyword this a
        console.log(`Hello ${this.name} your age are ${this.age}`)
    }
    console.log(this)
}

const mhs1 = new Mahasiswa()
console.log(mhs1)
mhs1.getAge()

//Object literal
// Arrow function Tidak mempunyai konsep TODO()this
const MahasiswaLiteral = {
    name: 'Dito',
    age: 20,
    isFun: () => {
        if (this.age >= 20) {
            console.log(`${name} is fun !!!`)
        } else {
            console.log("Dito boring ")
        }
    }
}

MahasiswaLiteral.isFun()
const mahasiswa2 = function () {
    this.name = 'Dito'
    this.age = 20
    let isFun = () => {
        if (this.age >= 20) {
            console.log(`${this.name} is fun !!!`)
        } else {
            console.log("Dito boring ")
        }
    }

    //tanpa arrow tidak bisa , lalu this akan mencari scope di luar dan terkena hoisting karena  merupakan function declaration
    // setInterval(function () {
    //     console.log(this.age++)
    // }, 500)
    //dengan arrow function
    
    setInterval(() => {
        console.log(this.age++)
    }, 500)
}


let mhs2 = new mahasiswa2()
console.log()

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => {
        alert("You agreed.");
    },
    () => {
        alert("You canceled the execution.");
    }
);

for (let index = 0; index < 5; index++) {
    console.log(index)
}
