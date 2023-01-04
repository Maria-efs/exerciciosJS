'use strict'

function somar() {
  const number1 = document.getElementById('number1').value
  const number2 = document.getElementById('number2').value
  const number3 = document.getElementById('number3').value
  const resultado = document.getElementById('resultado')

  if (number1 === '' || number2 === '' || number3 === '') {
    resultado.textContent = 'Preencha todos os campos'
  } else {
    const soma = parseInt(number1) + parseInt(number2) + parseInt(number3)

    if (soma >= 100) resultado.textContent = `O resultado é ${soma}`
    else
      resultado.textContent = `O resultado só será exibido se for maior ou igual a 100`
  }
}

calcular.addEventListener('click', somar)
