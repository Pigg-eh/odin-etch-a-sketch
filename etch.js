let squArray = []

makeDiv()
function makeDiv (){
    for (i=0; i<256; i++){
        squArray.push('div'+i)
    }
}

//doMathMultiply()
//doMathDivision()



insertDiv()
function insertDiv() {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<256; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
} 

//addResizeButton()

addClass()
function addClass() {
    let pixels = document.querySelectorAll('div>div')

    pixels.forEach((pixel) => {
        pixel.classList.add('pixel')
    })
}

hoverOver()
function hoverOver() {
    const pixels = document.querySelectorAll('div.pixel')


    pixels.forEach((pixel) => {
        pixel.addEventListener ('mouseover',(e) => {
            e.target.style.background = 'black'; 
        })
    })
}



//ResizeGrid()

    
