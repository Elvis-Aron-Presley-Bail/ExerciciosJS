function inserir(numero){
    var numeros = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numeros + numero
}

function calcular(){
    var numeros = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = eval(numeros)
}

function apagar(){
    var numeros = document.getElementById('res').innerHTML = ''
}

function apagarultimo(){

    var numeros = document.getElementById('res').innerHTML
    var ultimo = document.getElementById('ultimo').innerHTML

    for(let i = 0; i < numeros.length; i++){
        ultimonumero[i] > numeros.length
        ultimo.innerHTML = `É o ultimo numero ${ultimonumero}`
    }
}