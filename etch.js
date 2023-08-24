// function applyStyles () {
//     document.getElementsByClassName('littleDiv').style.color = 'blue'
// }

let squArray = []
makeDiv()

function makeDiv (){
    for (i=0; i<16; i++){
        squArray.push('div'+i)
    }
}

insertDiv()

function insertDiv(){
    let divContainer= document.querySelector('div.container')
    for (i=0; i<16; i++){
        makeDiv[i]= document.createElement('div')
        divContainer.appendChild(makeDiv[i])
        
    }
}

function applyStyles(){

}
