function calculatesum() {
    var input1 = Number(document.getElementById('input_1').value);
    var input2 = Number(document.getElementById('input_2').value);

    var output = input1 + input2;
    
    document.getElementById('sumresult').innerHTML = output;
}

document.getElementById('sum').addEventListener('click', calculatesum);



function calculatesubtract() {
    var input3 = Number(document.getElementById('input_3').value);
    var input4 = Number(document.getElementById('input_4').value);

    var output = input3 - input4;
    
    document.getElementById('subtractresult').innerHTML = output;
}

document.getElementById('subtract').addEventListener('click', calculatesubtract);