
var displayValue1; 
//var operator; 


function pressButtonPlus() {
    displayValue1 = Number(document.getElementById('display').value);
    //operator = 'plus';
    document.getElementById('display').value = '+';
}

document.getElementById('button_plus').addEventListener('click', pressButtonPlus);


function pressButtonResolve() {
    var displayValue2 = Number(document.getElementById('display').value);
    document.getElementById('display').value = displayValue1 + displayValue2;
}

document.getElementById('button_resolve').addEventListener('click', pressButtonResolve);





function pressButton1() {
    document.getElementById('display').value = 1;
}

document.getElementById('button_1').addEventListener('click', pressButton1);

function pressButton2() {
    document.getElementById('display').value = 2;
}

document.getElementById('button_2').addEventListener('click', pressButton2);

function pressButton3() {
    document.getElementById('display').value = 3;
}

document.getElementById('button_3').addEventListener('click', pressButton3);







