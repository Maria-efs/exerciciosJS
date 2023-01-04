'use strict'

function calcularPositivo() {
  const number = document.getElementById('number').value
  const resultado = document.getElementById('resultado')
  let valor

  if (number === '') {
    resultado.textContent = 'Preencha todos os campos'
  } else {
    if (number < 0) valor = number * -1
    
    else valor = number
    //console.log(`${number} em positivo: ${valor}`)
    resultado.textContent = valor
  }
}

calcular.addEventListener('click', calcularPositivo)
