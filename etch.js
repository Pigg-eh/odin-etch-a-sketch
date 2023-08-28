// function applyStyles () {
//     document.getElementsByClassName('littleDiv').style.color = 'blue'
// }

let squArray = []

makeDiv()
function makeDiv (){
    for (i=0; i<256; i++){
        squArray.push('div'+i)
    }
}

insertDiv()
function insertDiv() {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<256; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
} 


addClass()
function addClass() {
    let pixels = document.querySelectorAll('div>div')

    pixels.forEach((pixel) => {
        pixel.classList.add('pixel')
    })
}

hoverOver()
function hoverOver() {
    const container = document.querySelector('div.container') //can delete later
    const pixels = document.querySelectorAll('div.pixel')

    // container.addEventListener ('mouseover', (e) => {
    //     e.target.style.background = 'pink';
    // }) //bubbling version

    pixels.forEach((pixel) => {
        pixel.addEventListener ('mouseover',(e) => {
            e.target.style.background = 'pink'; 
        })
    })
}
    
