let squArray = [] 
let gridSize = 16

makeDiv()
function makeDiv (x=256){
    for (i=0; i<x; i++){
        squArray.push('div'+i)
    }
}//number of squares

insertDiv()
function insertDiv(x=256) {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<x; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
} 

function sizeDiv (x= 62.5){
    let squareSize = document.querySelector('div.pixel')
    squareSize.style.width = `${x}px`
    squareSize.style.height = `${x}px`
}

function clearDiv (){ //remove div.pixel temporarily
    let pixels = document.querySelectorAll('.pixel')

    pixels.forEach((pixel) => {
        pixel.remove();
    })

    squArray = []

    //doMaths(doMathMultiply, doMathDivide) functions returning null

}

function doMaths (product, quotient){ //immeadiately call the functions to add div agian

    makeDiv(product)
    insertDiv(product)
    sizeDiv(quotient) //may be the issue
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

createResizeButton()
function createResizeButton() {
    let container = document.querySelector('div.slideContainer')
    let sliderDisplay = document.createElement('button')
    container.appendChild(sliderDisplay)
    sliderDisplay.classList.add('display') 
} 

displaySliderValue (gridSize)
function displaySliderValue(value){
    let sliderDisplay = document.querySelector('button.display')
    sliderDisplay.textContent = `Grid ${value}`
}

addClickListener()
function addClickListener() {
    let btn = document.querySelector('button.display')

    btn.addEventListener('onclick', clearDiv())

    btn.addEventListener ('click',  () => {   
        clearDiv()   
    })
}

function doMathMultiply(x /*passed from slider */) {
	return x**2
    
}// number of divs to make 

function doMathDivide(x/*also passed from slider*/){
	return 1000/x
    
}//size of individual divs (change div.pixel attribute)



addGridClass()
function addGridClass() {
    let pixels = document.querySelectorAll('div.container>div')

    pixels.forEach((pixel) => {
        pixel.classList.add('pixel')
    })
}

resizeGrid()
function resizeGrid() {
    let sliderValue = document.querySelector('input.slider')

    
        sliderValue.addEventListener('change', (e) => {
            gridSize = e.target.value;
            displaySliderValue(gridSize)
            doMathMultiply (gridSize)
            doMathDivide (gridSize)
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





    
