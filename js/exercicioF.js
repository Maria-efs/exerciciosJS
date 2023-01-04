'use strict'

const gerenciarNumeros = function () {
  const number1 = document.getElementById('number1').value
  const number2 = document.getElementById('number2').value
  const number3 = document.getElementById('number3').value
  const resultado = document.getElementById('resultado')

  if (number1 === '' || number2 === '' || number3 === '') {
    resultado.textContent = 'Preencha todos os campos'
  } else {
    let valor = [number1, number2, number3]
    valor.sort((a, b) => a - b)
    resultado.textContent = `Os números em ordem crescente ficam: ${valor}`

    resultado.textContent = valor
  }
}

ordenar.addEventListener('click', gerenciarNumeros)
