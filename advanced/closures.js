function init(params) {
    return function tampilName(name) {
        console.log(name)
        console.log(params)
    }
}

let myName = init('aku diluar')
myName('otid')

let add = (function () {
    let counter = 0
    return function () {
        return ++counter
    }
})

let a = add()
console.log(a())

const named = () => 'Hello'
console.log(named())

const arr = ['a', 2, 3, 4, 5]
let name = arr.map(function (arr) {
    return arr.length
})
console.table(name)
name = arr.map(arr => ({name, arr: arr.length}))
console.table(name)

