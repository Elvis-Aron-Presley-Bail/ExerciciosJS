var res = document.getElementById('res')

let colocacao = 

switch(colocacao){
    case 1:
        res.innerHTML = `Primeiro lugar`
        break
    case 2:
        res.innerHTML = `Segundo lugar`
        break
    case 3:
        res.innerHTML = `Terceiro lugar`
        break
    case 4: case 5: case 6:
        res.innerHTML = `Premio de participaçao`
        break
    default:
        res.innerHTML = `Nao subiu ao podio`
        break


}