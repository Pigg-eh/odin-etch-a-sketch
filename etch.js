let squArray = [] 
let product = (x) => x**2// number of divs to make 
let quotient = (x)=> 1000/x   
//size of individual divs (change div.pixel attribute)
//parameters passed from slider

makeDiv(256)
function makeDiv (x){
    for (i=0; i<x; i++){
        squArray.push('div'+i)
    }
}//number of squares

insertDiv(256)
function insertDiv(x) {
    let divContainer= document.querySelector('div.container')
    for (i=0; i<x; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
    }
    addGridClass()
} 


function addGridClass() {
    let pixels = document.querySelectorAll('div.container>div')

    pixels.forEach((pixel) => {
        pixel.classList.add('pixel')
    })
}

styleDiv()
function styleDiv (x= 62.5){
    let squaresSize = document.querySelectorAll('div.pixel')
   
    squaresSize.forEach((squareSize)=> {
        squareSize.style.width = `${x}px`,
        squareSize.style.height = `${x}px`
        squareSize.style.color = 'grey'
    })
} //on to something here


function clearDiv (){ //remove div.pixel temporarily
    let pixels = document.querySelectorAll('.pixel')

    pixels.forEach((pixel) => {
        pixel.remove();
    })

    squArray = []

    doMaths(product, quotient) //functions returning null

}



function doMaths (product, quotient){ //immediately call the functions to add div again

    makeDiv(product)
    insertDiv(product)
    styleDiv(quotient) //may be the issue
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
    slider.setAttribute('value', 16)


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

displaySliderValue (16)
function displaySliderValue(value){
    let sliderDisplay = document.querySelector('button.display')
    sliderDisplay.textContent = `Grid ${value}`
}

addClickListener()
function addClickListener() {
    let btn = document.querySelector('button.display')


    btn.addEventListener ('click',  () => {   
        clearDiv()   
    })
}





resizeGrid()
function resizeGrid() {
    let sliderValue = document.querySelector('input.slider')

    
        sliderValue.addEventListener('change', (e) => {
            let displayValue = e.target.value;
            displaySliderValue(displayValue)
            product (displayValue)
            quotient (displayValue)
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





    
