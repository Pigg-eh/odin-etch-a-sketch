let squArray = []

makeDiv()
function makeDiv (){
    for (i=0; i<256; i++){
        squArray.push('div'+i)
    }
}

createResizeSlider()
function createResizeSlider() {
    let body = document.querySelector('body')
    let container = document.createElement('div')
    let slider = document.createElement('input')
    body.appendChild(container)
    container.appendChild(slider)
    slider.setAttribute('type', 'range')
    slider.setAttribute('min', '1')
    slider.setAttribute('max', '64')
    slider.setAttribute('value', '16')


    container.classList.add('slideContainer')
    slider.classList.add('slider')
}



function doMathMultiply(x) {
	x**2
}// number of divs to make

function doMathDivision(x){
	1000/x
}//size of individual divs

insertDiv()
function insertDiv(x=256) {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<x; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
} 

//resize()

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

    
