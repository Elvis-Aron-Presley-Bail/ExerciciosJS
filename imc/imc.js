let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let res = document.getElementById('res')

function calcular(){

    let alturaN = Number(altura.value)
    let pesoN = Number(peso.value)

    let imc = (pesoN / (alturaN * alturaN)).toFixed(1)

    if (imc >= 18.5 && imc <= 25){
        res.innerHTML = `${nome.value}, seu IMC é ${imc} e você está no peso ideal.`
    } else if(imc < 18.5){
        res.innerHTML = `${nome.value}, seu IMC é ${imc} e você está abaixo do peso.`
    } else if (imc < 30) {
        res.innerHTML = `${nome.value}, seu IMC é ${imc} e você está acima do peso.`
    } else {
        res.innerHTML = `${nome.value}, seu IMC é ${imc} e você é uma baleia.`
    }



}