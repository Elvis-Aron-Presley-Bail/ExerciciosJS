var res = document.getElementById('res')

let fun = function(v1,v2){
    return v1 + v2
}

res.innerHTML = fun(10,20)

let funct = function(...valores){
    let valor = 0
    for(v of valores){
        valor += v
    }
    return valor
}

res.innerHTML += funct(10,20,30,40)

let funflexa = (n1,n2) => {return n1 + n2}

res.innerHTML += funflexa(25,30)


const soma = (...valoress)=>{
    const somar=val=>{
        let res = 0
        for(va of val){
            res+=va
        }
        return res
    }
    return somar(valoress)
}

res.innerHTML = soma(10,20,30,45)