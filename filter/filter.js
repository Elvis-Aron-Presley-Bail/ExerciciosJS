const idades = [17,20,35,14,39,70,43,15]
const res = document.querySelector('#res')

const filtro = idades.filter((idade)=>{
    if(idade >= 18)
        return idade
})

res.innerHTML = filtro