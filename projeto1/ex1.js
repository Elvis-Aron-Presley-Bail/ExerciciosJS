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

    let maior = numeros[0]
    let menor = numeros[0]

    for (let pos in numeros){
        if (numeros[pos] > maior)
            maior = numeros[pos]
        if (numeros[pos] < menor)
            menor = numeros[pos]
    }

    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
    res.innerHTML += `O menor valor informado foi ${menor} <br>`
    res.innerHTML += `O maior valor informado foi ${maior} <br>`
    res.innerHTML += `Somando todos os valores, temos <br>`
    res.innerHTML += `A média dos valores digitados é`
}