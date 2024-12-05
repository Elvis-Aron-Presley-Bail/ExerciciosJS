var num1 = document.getElementById('num1')
var numeros = document.getElementById('numeros')
var res = document.getElementById('res')
let valores = []

function adicionar(){

    var num = Number(num1.value)

    // function inserido(){
    //     for(let co = 0; co < valores.length; co++){
    //         if(num == valores[co]){
    //             return false
    //         }
    //     }
    // }

    // if(num != inserido(true)){
    //     alert('valor ja inserido')
    // }


    if(num < 0 || num > 100){
        alert('insira um número valido')
    } 
    
    if(num >= 0 || num <=100){
    numeros.innerHTML += `Valor ${num} adicionado <br>`
    valores.push(num)
    }  
}

function finalizar(){

    valores.sort()

    let maior = 0
    let soma = 0
    

    for(v of valores){
        if(v > maior){
            maior = v
        }
    }

    for(va in valores){
        soma += valores[va]
    }
    var media = soma / valores.length

    res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A media dos valores digitados é ${media}.<br>`
}