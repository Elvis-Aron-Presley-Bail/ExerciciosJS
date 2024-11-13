let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let res = document.getElementById('res')

function calcular(){

    let alturaN = Number(altura.value)
    let pesoN = Number(peso.value)

    let imc = alturaN * alturaN / pesoN

    res.innerHTML = `${nome.value}, seu IMC é ${imc} e você está do peso.`

}