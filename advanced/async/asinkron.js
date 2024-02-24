function pong1(){
    console.log("Lagi jalan !!!")
}

function pong2(){
    console.log("Lagi Jalan !!!!")
}

function pong3(){
    //set timeout berjalan asinkronus
    console.log("Ini aku ada fungsi yang lagi kedelay , tunggu aja ")
    setTimeout(()=>{
        for (let i = 0; i < 5; i++) {
            console.log("Lagi Jalan  , cuma telat aku wkwkwkwkwkwk!!!")
        }
    },1000)
}

//
// //contoh asinkronus
pong1()
pong2()
pong3()

