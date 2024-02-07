//mendaptkan konten element dengan tag head

const btn1 = document.querySelector("#tambah-id")
const textHasil = document.querySelector('#input-hasil')
btn1.addEventListener("click",
    //mengambil nilai dari input text field dengan tipe click
    () => {
        const inputUser1 = document.getElementById('text1-id').value
        const inputUser2 = document.getElementById('text2-id').value
        textHasil.innerText = parseInt(inputUser1) + parseInt(inputUser2)
    }
)


