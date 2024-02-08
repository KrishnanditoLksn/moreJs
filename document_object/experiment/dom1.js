//mendaptkan konten element dengan tag head
const btn1 = document.querySelector("#tambah-id")
const textHasil = document.getElementById('text-hasil')
const btn2 = document.querySelector("#kurang-id")
let inputHasil;
let inputUser1;
let inputUser2;

btn1.addEventListener("click",
    //mengambil nilai dari input text field dengan tipe click
    () => {
        inputUser1 = document.getElementById('text1-id').value
        inputUser2 = document.getElementById('text2-id').value
        inputHasil = parseInt(inputUser1) + parseInt(inputUser2)
        if (inputUser1.length < 0 || inputUser2.length < 0) {
            alert("text kosong")
        } else {
            textHasil.innerText = inputHasil.toString()
        }
    }
)

btn2.addEventListener("click",
    () => {
        inputUser1 = document.getElementById('text1-id').value
        inputUser2 = document.getElementById('text2-id').value
        inputHasil = parseInt(inputUser1) - parseInt(inputUser2)
        if (inputUser1.length < 0 || inputUser2.length < 0) {
            alert("text kosong")
        } else {
            textHasil.innerText = inputHasil.toString()
        }
    }
)

