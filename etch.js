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

function insertDiv(){
    let divContainer= document.querySelector('div.container')
    for (i=0; i<256; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
        
    }
} 