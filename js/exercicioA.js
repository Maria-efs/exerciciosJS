'use strict'

function subtrairNumber(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');

    const valor = parseInt(number1) - parseInt(number2)
    resultado.textContent = valor
}

calcular.addEventListener('click', subtrairNumber)