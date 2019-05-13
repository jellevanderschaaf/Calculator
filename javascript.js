// Global variables

var displayValue1; 
var operator = "";

// operator functions

function pressButtonPlus() {
    displayValue1 = Number(document.getElementById('display').value);
    operator = "plus";
    document.getElementById('display').value = '';
}

document.getElementById('button_plus').addEventListener('click', pressButtonPlus);

function pressButtonMinus() {
    displayValue1 = Number(document.getElementById('display').value);
    operator = "minus";
    document.getElementById('display').value = '';
}

document.getElementById('button_minus').addEventListener('click', pressButtonMinus);


function pressButtonMultiply() {
    displayValue1 = Number(document.getElementById('display').value);
    operator = "multiply";
    document.getElementById('display').value = '';
}

document.getElementById('button_multiply').addEventListener('click', pressButtonMultiply);

function pressButtonDivide() {
    displayValue1 = Number(document.getElementById('display').value);
    operator = "divide";
    document.getElementById('display').value = '';
}

document.getElementById('button_divide').addEventListener('click', pressButtonDivide);


// Resolve

function pressButtonResolve() {
    var displayValue2 = Number(document.getElementById('display').value);
    
    if (operator == "plus") {
        document.getElementById('display').value = displayValue1 + displayValue2;
        
    } else if (operator == "minus") {
        document.getElementById('display').value = displayValue1 - displayValue2;
    
    } else if (operator == "multiply") {
            document.getElementById('display').value = displayValue1 * displayValue2;

    } else if (operator == "divide") {
        document.getElementById('display').value = displayValue1 / displayValue2;
    }
}

document.getElementById('button_resolve').addEventListener('click', pressButtonResolve);


// Clear display

function pressButtonClear() {
    document.getElementById('display').value = "";
}

document.getElementById('button_clear').addEventListener('click', pressButtonClear);

// Data-input buttons


function pressButton1() {
    document.getElementById('display').value += 1;
}

document.getElementById('button_1').addEventListener('click', pressButton1);

function pressButton2() {
    document.getElementById('display').value += 2;
}

document.getElementById('button_2').addEventListener('click', pressButton2);

function pressButton3() {
    document.getElementById('display').value += 3;
}

document.getElementById('button_3').addEventListener('click', pressButton3);

function pressButton4() {
    document.getElementById('display').value += 4;
}

document.getElementById('button_4').addEventListener('click', pressButton4);

function pressButton5() {
    document.getElementById('display').value += 5;
}

document.getElementById('button_5').addEventListener('click', pressButton5);

function pressButton6() {
    document.getElementById('display').value += 6;
}

document.getElementById('button_6').addEventListener('click', pressButton6);

function pressButton7() {
    document.getElementById('display').value += 7;
}

document.getElementById('button_7').addEventListener('click', pressButton7);

function pressButton8() {
    document.getElementById('display').value += 8;
}

document.getElementById('button_8').addEventListener('click', pressButton8);

function pressButton9() {
    document.getElementById('display').value += 9;
}

document.getElementById('button_9').addEventListener('click', pressButton9);

function pressButton0() {
    document.getElementById('display').value += 0;
}

document.getElementById('button_0').addEventListener('click', pressButton0);

function pressButtonComma() {
    document.getElementById('display').value += '.';
}

document.getElementById('button_comma').addEventListener('click', pressButtonComma);