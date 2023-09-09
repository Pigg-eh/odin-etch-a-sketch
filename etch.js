let squArray = []
let sliderValue = 16
let findProduct = (x) => x**2;// number of divs to make 
let findQuotient = (x)=>1000/x;  

console.log(findProduct(5))
//function displaySliderValue() not changing the button


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
        squareSize.style.width = `${x}px`
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

    doMaths(findProduct(sliderValue), findQuotient(sliderValue)) //functions returning NaN

}



function doMaths (x, y){ //immediately call the functions to add div again

    makeDiv(x)
    insertDiv(x)
    styleDiv(y)
}//values are coming out as NaN here

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
    console.log(`VALUEPARAM: ${value}`)
}

addClickListener()
function addClickListener() {
    let btn = document.querySelector('button.display')


    btn.addEventListener ('click',  () => {   
        clearDiv(sliderValue) 
          
    })
}





resizeGrid(sliderValue)
function resizeGrid() {
    let slidersValue = document.querySelector('input.slider')

    
        slidersValue.addEventListener('change', (e) => {
            sliderValue = e.target.value;
            console.log(`HERESTUPIDsliderValue@resizeGrid(): ${sliderValue}`)
        }) 
        displaySliderValue(sliderValue)
        findProduct (sliderValue)
        console.log(`displayVal@resizeGrid(): ${sliderValue}`)
        findQuotient (sliderValue)
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





    
