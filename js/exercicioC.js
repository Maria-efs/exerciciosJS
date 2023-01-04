'use strict'

function calcularMedia() {
  const number1 = document.getElementById('number1').value
  const number2 = document.getElementById('number2').value
  const number3 = document.getElementById('number3').value
  const number4 = document.getElementById('number4').value
  const resultado = document.getElementById('resultado')
  let status

  if (number1 === '' || number2 === '' || number3 === '' || number4 === '') {
    resultado.textContent = 'Preencha todos os campos'
  } else {
    const valor =
      (parseInt(number1) +
        parseInt(number2) +
        parseInt(number3) +
        parseInt(number4)) / 4
        
    if (valor >= 7) status = 'aprovado'
    else status = 'reprovado'

    resultado.textContent = `A média é ${valor} e o aluno está ${status}`
  }
}

document.getElementById('calcular').addEventListener('click', calcularMedia)
