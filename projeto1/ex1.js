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
numeros.sort()
function finalizar(){

    

    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
    res.innerHTML += `O menor valor informado foi ${numeros[0]} <br>`
    res.innerHTML += `O maior valor informado foi ${numeros[numeros.length - 1]} <br>`
    res.innerHTML += `Somando todos os valores, temos <br>`
    res.innerHTML += `A média dos valores digitados é`
}