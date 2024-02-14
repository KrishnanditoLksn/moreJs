//ambil nilai dari text area


let add = () => {

}

let btn = document.querySelector('#btnPlus')
btn.addEventListener('click', () => {
    const userText = document.querySelector('#textarea').value
    const parentUl = document.querySelector('#li')
    const minusButton = document.createElement('button')
    const textButton = document.createTextNode('-')
    minusButton.appendChild(textButton)
    const text = document.createTextNode(userText)
    const liElement = document.createElement('p')
    liElement.appendChild(text)
    liElement.appendChild(minusButton)
    parentUl.appendChild(liElement)
    document.querySelector('#task-list');
    minusButton.addEventListener('click', () => {
        parentUl.removeChild(liElement)
    })
})