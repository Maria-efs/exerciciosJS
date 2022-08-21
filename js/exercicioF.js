'use strict'

function ordemCrescente() { 
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;
    const resultado = document.getElementById('resultado')

    let maior, menor, meio

    if(number1 > number2 && number1 > number3){
        maior = number1
    }
    else if (number1 < number2 && number1 < number3){
        menor = number1
    }else{
        meio = number1
    }

    resultado.textContent = `${menor} ${meio} ${maior}`

}
    
ordenar.addEventListener('click', ordemCrescente)

