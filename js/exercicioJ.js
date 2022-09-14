'use strict'

function calcularParImpar(){
    const number = document.getElementById('number').value;
    const resultado = document.getElementById('resultado');

    if(number % 2 == 0)
    resultado.textContent = `O número ${number} é par`

    else
    resultado.textContent = `O número ${number} é ímpar`
}

calcular.addEventListener('click', calcularParImpar)