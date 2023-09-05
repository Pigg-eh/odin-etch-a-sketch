let squArray = []
let gridSize = 16

makeDiv()
function makeDiv (x=256){
    for (i=0; i<x; i++){
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
    slider.setAttribute('value', gridSize)


    container.classList.add('slideContainer')
    slider.classList.add('slider')
}

createSliderDisplay()
function createSliderDisplay() {
    let container = document.querySelector('div.slideContainer')
    let sliderDisplay = document.createElement('div')
    container.appendChild(sliderDisplay)
    sliderDisplay.classList.add('display') 
    sliderDisplay.textContent = 'test'
} 

displaySliderValue ()
function displaySliderValue(value){
    //let currentValue = document.querySelector('input.slider')
    let sliderDisplay = document.querySelector('div.display')
    sliderDisplay.textContent = `Grid ${value}`
}

function doMathMultiply(x /*passed from slider */) {
	return x**2
}// number of divs to make 

function doMathDivision(x/*also passed from slider*/){
	return 1000/x
}//size of individual divs (change div.pixel attribute)

insertDiv()
function insertDiv(x=256) {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<x; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
} 

addGridClass()
function addGridClass() {
    let pixels = document.querySelectorAll('div.container>div')

    pixels.forEach((pixel) => {
        pixel.classList.add('pixel')
    })
}

resizeGrid()
function resizeGrid() {
    let sliderValue = document.querySelector('input')

    
        sliderValue.addEventListener('range', (e) => {
            gridSize = e.target.value
        })
    

    displaySliderValue(gridSize)
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





    
