function inserir(numero){
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res + numero
}

function calcular(){
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = eval(res)
}

function apagar(){
    var res = document.getElementById('res').innerHTML = ''
}