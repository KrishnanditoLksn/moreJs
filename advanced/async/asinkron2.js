const rng = [Math.random() * 12312321]
export const framework = ["React", "SpringBoot", "Angular", "Vue"]


// let login = (username) => {
//     //return objek ketika login
//     console.log("memproses Validasii.....")
//     setTimeout(() => {
//         if (username === undefined) {
//             return "Params is empty !!!1"
//         } else {
//             return {username, rng}
//         }
//     }, 3000)
// }

//callback implementasi
let login = (username, callback) => {
    //return objek ketika login
    console.log("memproses Validasii.....")
    setTimeout(() => {
        //parameter callback mempunyai nilai username dan rng
        callback({username, rng})
    }, 3000)
}

//fungsi mendapatkan user
let getUsers = (tokenz, callback) => {
    console.log("Memproses token user ")
    if (tokenz) {
        setTimeout(() => {
            callback({apiKey: "1234"})
        }, 3000)
    } else {
        return {apiKey: "404 Not Found"}
    }
}

//mendapatkan return object callback dengan param {callback}
let getFramework = (apiKey, callback) => {
    console.log("Memproses framework generator ")
    if (apiKey !== null) {
        setTimeout(() => {
            callback({framework: framework})
        }, 3000)
    } else {
        setTimeout(() => {
            callback({framework: "404 Error !!!"})
        }, 3000)
    }
}

// //1
// let userLogin = login("Emmanuel Dito")
// console.log(userLogin)
// console.log(userLogin.rng)
// //menggunakan object destructuring
// const {apiKey} = getUsers(userLogin.rng)
// console.log(apiKey)
//
// //2
// const userFramework = getFramework(apiKey)
// console.log(userFramework)


//tangkap nilai melalui parameter , nilai akhir dari  rng dan username dikirim ke callback
//didalam fungsi mempunyai sebuah callback

//                                  NESTED CALLBACK
login("123123", (response) => {
    console.log("data dah diambil data cuyyyy", response)
    const {rng} = response
    //object destructuring
    // const apiKey = getUsers(rng)
    // console.log({apiKey})

    getUsers(rng, (response) => {
        console.log("Berhasil ngeload user cuy !!")
        const {apiKey} = response
        console.log(apiKey)
        getFramework(rng, (response) => {
            console.log("Berhasil ngeload data framework");
            const {framework} = response;
            console.log(framework);
        });
    })
})

