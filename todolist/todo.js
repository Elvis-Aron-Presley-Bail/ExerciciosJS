var num = document.getElementById('num')
var res = document.getElementById('res')
var total = document.getElementById('total')
var valores = []

function adicionar(){

    var nume = Number(num.value)

    if(nume < 0 || nume > 100){
        alert('insira um numero válido')
        return false
    }

    if(valores.includes(nume)){
        alert('esse valor já está inserido')
    }

    else{
        valores.push(nume)
        res.innerHTML += `Valor ${nume} adicionado <br>`
    }

}

function finalizar(){

    var nume = Number(num.value)

    nume.sort

    let maior = 0
    
    for(let nu = 0 ; nu < valores.length ; nu++){
        valores[nu] > maior
        maior = valores[nu]
    }

    total.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br>`
    total.innerHTML+= `O maior valor informado foi ${maior}. <br>`
    total.innerHTML+= `O menor valor informado foi ${valores[0]}. <br>`
    total.innerHTML+= `Somando todos os valores, temos . <br>`
    total.innerHTML+= `A média dos valores digitados é . <br>`

}