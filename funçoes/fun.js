var res = document.getElementById('res')
var num = [10 , 20 , 50 , 40 , 30]

let maior = 0
let soma = 0

for(n in num){
    if(maior < num[n]){
        maior = num[n]
    }
    n++
}

for(m in num){
    soma += num[m]
    m++
}

res.innerHTML = `O maior numero e o ${maior} <br>`
res.innerHTML += `A soma de tudo e ${soma}<br>`

function mais(n1=0,n2=0){
    let somaa = n1 + n2
    res.innerHTML += `O resultado de ${n1} + ${n2} = ${somaa}`
}

mais(15 , 30)

function varios(...algo){
    let calcu = 0
    let resul = algo.length
    for(va in algo){
        calcu += algo[va]
    }
    return calcu
}

res.innerHTML = varios(10 , 20 , 30 , 40 , 50 , 60)

