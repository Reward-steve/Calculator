'use strict'

const output = document.querySelector('.display')
const outputResult = document.querySelector('.result')
const numKeys = document.querySelector('.num-keys')
const sciBtn = document.querySelector('.calculator-key.scientific')
const key = document.querySelector('.calculator-key.one.none')
const key2 = document.querySelector('.calculator-key.sci-btn')
const numKeySign = document.querySelector('.num-keys.none.sign')
const num = document.querySelectorAll('.num')
const sign = document.querySelectorAll('.div')

//button functions
numKeys.addEventListener('click', (e) => {

    //CALCULATING FOR PERCENTAGE
    if (e.target.textContent.trim() == '%') {
        outputResult.textContent = eval(output.value) / 100
    }

    //CALCULATING FOR SQUARE ROOT
    if (e.target.textContent.trim() == '√') {
        outputResult.textContent = `√(${output.value})`
        output.value = Math.sqrt(eval(output.value))
    }


    //If the targeted buttons does not contain "none",
    //numerical keys should be displayed on the output container.
    if (e.target.classList.contains('num')) {
        output.value += e.target.textContent.trim();
    }
    // if (!e.target.classList.contains('none')) {
    //     output.value += e.target.textContent.trim();
    // }

    if (e.target.textContent.trim() === '/' && output.value !== '') {
        console.log(true);
        output.value += e.target.textContent.trim();
    }

    if (e.target.textContent.trim() === '*' && output.value !== '') {
        console.log(true);
        output.value += e.target.textContent.trim();
    }


    //CALCULATING FOR CLEAR BUTTON
    if (e.target.textContent.trim() === 'AC') {
        output.value = '';
        outputResult.textContent = '';
    }

    //CALCULATING FOR EQUAL-TO OR EVALUATION BUTTON
    if (e.target.textContent.trim() === '=') {
        let result = eval(output.value.trim())
        outputResult.textContent = `${output.value}=`;
        output.value = result;
    }


    //CALCULATING FOR COS BUTTON
    if (e.target.textContent.trim() == 'Cos') {
        outputResult.textContent = `Cos(${output.value})`
        let w = (output.value * Math.PI / 180)
        output.value = Math.cos(w)
    }

    //CALCULATING FOR SINE BUTTON
    if (e.target.textContent.trim() == 'Sin') {
        outputResult.textContent = `Sin(${output.value})`
        let x = (output.value * Math.PI / 180)
        output.value = Math.sin(x)
    }

    //CALCULATING FOR TAN BUTTON
    if (e.target.textContent.trim() == 'Tan') {
        outputResult.textContent = `Tan(${output.value})`
        let y = (output.value * Math.PI / 180)
        output.value = Math.tan(y)
    }

    //CALCULATING FOR LOG BUTTON in base 10
    if (e.target.textContent.trim() == 'Log') {
        outputResult.textContent = `Log(${output.value})`
        output.value = Math.log10(output.value)
    }

    //CALCULATING FOR x² BUTTON
    if (e.target.textContent.trim() == 'x²') {
        outputResult.textContent = `${output.value}²`
        output.value = Math.pow(output.value, 2)
    }

    //CALCULATING FOR x³ BUTTON
    if (e.target.textContent.trim() == 'x³') {
        outputResult.textContent = `${output.value}³`
        output.value = Math.pow(output.value, 3)
    }

    /*CONDITION SETTING OUTPUT.VALUE AND OUTPUTRESULT.VALUE TO 
    AN EMPTY STRING(" ") IF THEIR VALUE IS EITHER "undefined"
    OR "NaN"
    */
    if (output.value == 'undefined' || output.value === 'NaN') {
        output.value = ''
        outputResult.value = ''
    }

    // if (output.value.startsWith('0') && e.target.textContent.trim() !== '/') {
    //     output.value = '';
    //     output.value += e.target.textContent.trim()
    // }
    // if (output.value.startsWith('0') && e.target.textContent.trim() === '/') {
    //     console.log(true);
    //     output.value = 0;
    // }


    if (e.target.textContent.trim() !== '+' &&
        e.target.textContent.trim() !== '-' &&
        e.target.textContent.trim() !== '*' &&
        e.target.textContent.trim() !== '/' &&
        e.target.textContent.trim() !== '0' &&
        e.target.textContent.trim() !== '=' &&
        e.target.textContent.trim() !== '.' &&
        e.target.textContent.trim() !== '%' &&
        e.target.textContent.trim() !== 'Cos' &&
        e.target.textContent.trim() !== 'Tan' &&
        e.target.textContent.trim() !== 'Sin' &&
        e.target.textContent.trim() !== '√' &&
        e.target.textContent.trim() !== 'x²' &&
        e.target.textContent.trim() !== 'x³' &&
        e.target.textContent.trim() !== ')' &&
        e.target.textContent.trim() !== '(' &&
        e.target.textContent.trim() !== 'Log'
    ) {
        outputResult.textContent = eval(output.value)
    }
})

//delete function;
document.querySelector('.del').addEventListener('click', (e) => {
    output.value = output.value.slice(0, -1)
})

//toggle scientific Button;
let text = true;
sciBtn.addEventListener('click', (e) => {
    document.querySelector('.Calculator').classList.toggle('new-width')
    numKeys.classList.toggle('new-width1')
    numKeySign.classList.toggle('show')
    if (text) {
        sciBtn.textContent = 'hide';
        text = false;
    } else {
        sciBtn.textContent = 'Sci.';
        text = true;
    }
})

//USING KEYBOARD INSTEAD OF CLICKING ON THE BUTTONS
document.addEventListener('keydown', (e) => {
    if (e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '0' ||
        e.key === '-' ||
        e.key === '+' ||
        e.key === '*' ||
        e.key === '/' ||
        e.key === '(' ||
        e.key === ')') {
        output.value += e.key
        outputResult.textContent = eval(output.value)
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        outputResult.textContent = `${output.value}=`
        output.value = eval(output.value)
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        output.value = output.value.slice(0, -1)
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') {
        output.value = '';
        outputResult.textContent = '';
    }
})