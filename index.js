'use strict'

let button = document.getElementById('calculate')
let buttonClean = document.getElementById('clean')

button.addEventListener('click',calculate)
buttonClean.addEventListener('click',clean)


function calculate(e){
    e.preventDefault() //for the page doesn't reload
    let num1=parseFloat(document.getElementById('num1').value)
    let num2=parseFloat(document.getElementById('num2').value)
    let num3=parseFloat(document.getElementById('num3').value)

    let delta = Math.pow(num2,2) - 4*num1*num3

    alert("Delta = " + delta)

    if(delta >0){
      let source1 = ((-num2 +Math.sqrt(delta))/ (2*num1)) 
      let source2 = ((-num2 -Math.sqrt(delta))/ (2*num1))
      document.getElementById('Result').innerHTML=
      'Raiz 1 = '+ source1 + 'Raiz 2 =' +source2
    }else if(delta === 0){
      let uniqueSource = ((-num2 + Math.sqrt(delta))/ (2*num1))
      document.getElementById('Result').innerHTML =
      "Raiz Unica = " + uniqueSource
    }else if(delta<0){
      document.getElementById('Result').innerHTML =
      'Delta < 0 ,não existe raíz'
    }

}


function clean(e){
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('num3').value = '';
  document.getElementById('result').innerHTML = null;
}