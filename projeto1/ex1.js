let num = document.getElementById('num')
let res = document.getElementById('res')
let numeros = []

function adicionar(){

    let nume = Number(num.value)

    if(nume == 0 || nume > 100 || nume.length == 0){
        alert('Insira um número válido')
    } else {

        numeros.push(nume)
        res.innerHTML += `Valor ${nume} adicionado <br>`

    }
}

function finalizar(){

    numeros.sort()

    var soma = 0
    var maior = 0

    for(var i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    var media = soma / numeros.length

    for(var big = 0; big < numeros.length; big++){
        if(numeros[big] > maior){
            maior = numeros[big]
        }
    }

    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
    res.innerHTML += `O menor valor informado foi ${numeros[0]} <br>`
    res.innerHTML += `O maior valor informado foi ${maior} <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
    res.innerHTML += `A média dos valores digitados é ${media}`
}