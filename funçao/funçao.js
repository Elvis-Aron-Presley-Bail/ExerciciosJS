var res = document.getElementById('res')

const numero = 200

res.innerHTML = numero

function meunome(nome){
    res.innerHTML += nome
}

meunome("elvis")

function soma(num1, num2){
    var nume = num1 + num2
    res.innerHTML = nume
}

soma(10,10)

function estaEndividado(receita, gastos){
    if (receita > gastos){
        return 'esta no azul'
    } else{
        return 'esta no vermelho'
    }
}

const maria = estaEndividado(5000, 7000)
const joao  = estaEndividado(10000, 2000)

res.innerHTML = joao