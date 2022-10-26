//define all the buttons to be used



// const btn = {
//     btn1: document.querySelector('#btn1'),
//     btn2: document.querySelector('#btn2'),
//     btn3: document.querySelector('#btn3'),
//     btn4: document.querySelector('#btn4'),
//     btn5: document.querySelector('#btn5'),
//     btn6: document.querySelector('#btn6'),
//     btn7: document.querySelector('#btn7'),
//     btn8: document.querySelector('#btn8'),
//     btn9: document.querySelector('#btn9'),
//     btn0: document.querySelector('#btn0'),
//     btnAdd: document.querySelector('#btnAdd'),
//     btnMinus: document.querySelector('#btnMinus'),
//     btnMult: document.querySelector('#btnMult'),
//     btnDivide: document.querySelector('#btnDivide'),
//     outputScreen: document.querySelector('#outputScreen'),
//     clearScreen: document.querySelector('#ce')
// }
// let numArray = [];
// let num1 = 0 // to keep track how many times button is pressed

// function displayNum() {
//     outputScreen.textContent = numArray.toString()

// }

// function clear() {
//     num1 = 0 //reset the counter back to zero
//     outputScreen.textContent = 0 //display back to zero
//     numArray = []  //array back to zero
// }

// // button 1 listener
// btn.btn1.addEventListener('click', function () {
//     numArray.push(1) //adding to end of array
//     console.log(numArray)
//     displayNum('1') // pass a string as an argument. to be multiteplied to the counter to get individual repeating number
// })
// btn.btn2.addEventListener('click', function () {
//     numArray.push(2)
//     console.log(numArray)
//     displayNum('2')
// })
// btn.clearScreen.addEventListener('click', function () {
//     clear()
// })

//========================================================================
const outputScreen = document.querySelector('#outputScreen')

function clear() {
    num1 = 0 //reset the counter back to zero
    outputScreen.textContent = 0 //display back to zero
    numArray = []  //array back to zero
}
function btnValue() {
    const buttons = document.querySelectorAll('.btnNum');
    for (allBtns of buttons) {
        console.log(allBtns.value)
    }
}

const btnGrp1 = document.querySelector('.btnGrp1')
const btnGrp2 = document.querySelector('.btnGrp2')
const btnGrp3 = document.querySelector('.btnGrp3')

btnGrp1.addEventListener('click', function (e) {
    if (e.target === 'INPUT' || e.target.nodeName === 'INPUT') {
        console.log('clicked')
        console.log(e.target.value)
        outputScreen.append(e.target.value)
    }
})




