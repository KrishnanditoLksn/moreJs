function userInputName() {
    let name = prompt("Your name")
    return document.getElementById("names").innerHTML = name
}


let trues = function () {
    alert("its true message dude !!")
}

export function fds() {
    console.log("dwdawdwa")
}

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}
console.log("dwa")