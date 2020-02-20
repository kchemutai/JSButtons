const allButtons = document.querySelectorAll('button')

let copyAllButtons = []

for( let i=0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1])
}
function buttonColorChange(button){
    if (button.value === 'red'){
        buttonRed()
    }
    else if(button.value === 'green'){
        buttonGreen()
    }
    else if(button.value === 'reset'){
        buttonColorReset()
    }
    else if(button.value === 'random'){
        randomColors()
    }
}

function buttonRed(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-danger')
    }
}
function buttonGreen(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-success')
    }
}
function buttonColorReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(copyAllButtons[i])
    }
}

function randomColors(){

    let colorsChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for(let i=0; i<allButtons.length; i++){
        let randomNumber = Math.floor(Math.random()*colorsChoices.length)
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(colorsChoices[randomNumber])

    }
}