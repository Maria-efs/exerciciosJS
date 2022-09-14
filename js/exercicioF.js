'use strict'

const gerenciarNumeros = function () {
    const number1 = +document.getElementById('number1').value;
    const number2 = +document.getElementById('number2').value;
    const number3 = +document.getElementById('number3').value;
    const resultado = document.getElementById('resultado');

    let valor = [number1, number2, number3];
    valor.sort((a, b) => a - b);

    resultado.textContent = valor;
}

ordenar.addEventListener('click', gerenciarNumeros);

