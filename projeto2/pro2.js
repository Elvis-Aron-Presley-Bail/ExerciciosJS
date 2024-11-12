let num1 = document.getElementById('num1')
let num = document.getElementById('numeros')
let res = document.getElementById('mostrar')
let numeros = []

function mais(){

    var nume = Number(num1.value)

    if(nume == 0 || nume > 100){
        alert('Insira um numero valido')
    } else{
        num.innerHTML += `Valor ${nume} adicionado. <br> `
        numeros.push(nume)
    }

}

function finalizar(){

    numeros.sort()

    maior = 0
    soma  = 0
    

    for(let s = 0 ; s < numeros.length ; s++){
        soma += numeros[s]
    }

    for(let m = 0 ; m < numeros.length ; m++){
        if(numeros[m] > maior){
            maior = numeros[m]
        }
    }
    
    media = soma / numeros.length

    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${numeros[0]}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    res.innerHTML += `A média dos valores digitados é ${media}. <br>`

}
