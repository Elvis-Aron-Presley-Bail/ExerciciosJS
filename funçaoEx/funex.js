var res = document.getElementById('res')
var num1= document.getElementById('num1')
var num2= document.getElementById('num2')

function mais(){
    var resultado = Number(num1.value) + Number(num2.value)
    res.innerHTML += `O resultado é ${resultado} <br>`
}

function menos(){
    var resultado = Number(num1.value) - Number(num2.value)
    res.innerHTML += `O resultado é ${resultado} <br>`
}

function veses(){
    var resultado = Number(num1.value) * Number(num2.value)
    res.innerHTML += `O resultado é ${resultado} <br>`
}

function dividir(){
    var resultado = Number(num1.value) / Number(num2.value)
    res.innerHTML += `O resultado é ${resultado} <br>`
}

function limpar(){
    res.innerHTML = ''
}