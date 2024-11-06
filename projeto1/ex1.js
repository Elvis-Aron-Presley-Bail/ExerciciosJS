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

    numeros.sort

    res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${numeros[2]} <br>`
    res.innerHTML += `O menos valor informado foi ${numeros[0]} <br>`
    res.innerHTML += `Somando todos os valores, temos <br>`
    res.innerHTML += `A média dos valores digitados é`
}