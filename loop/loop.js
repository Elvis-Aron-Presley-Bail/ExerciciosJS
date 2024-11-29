var res = window.document.getElementById('res')

var lista = [10,20,30,40,50]

for(let c = 0 ; c < lista.length ; c++){
    res.innerHTML += `Numero ${lista[c]} <br>`
}

res.innerHTML += `Fim do processo <br>`

for(n in lista){
    res.innerHTML += `Numero ${lista[n]} <br>`
}

res.innerHTML += `Fim do segundo processo`

let soma = 0

for(m in lista){
    soma += lista[m]
    res.innerHTML = `Soma é igual a ${soma}`
}