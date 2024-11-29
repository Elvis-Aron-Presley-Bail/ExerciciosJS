var num1 = document.getElementById('num1')
var res  = document.getElementById('itens')
var fim  = document.getElementById('fim')
var valor= []

function adicionar(){

    numero = Number(num1.value)

    if (numero >= '100' && numero < '0'){
        alert('numero invalido')
    } else {
        res.innerHTML += `Valor ${numero} adicionado. <br>`
        valor.push(numero)
    }

}

function finalizar(){

    valor.sort()

    var maior = 0
    var soma = 0

    for(let n = 0 ; n < valor.length ; n++){
        valor[n] < maior
        maior = valor[n]
    }

    for(let s = 0 ; s < valor.length ; s++){
        soma += valor[s]
    }

    fim.innerHTML += `Ao todo são ${valor.length} valores <br>`
    fim.innerHTML += `O menor valor é ${valor[0]}<br>`
    fim.innerHTML += `O maior valor é ${maior} <br>`
    fim.innerHTML += `A soma de todos os valores é ${soma} <br>`
    fim.innerHTML += `A media dos valores é <br>`

}