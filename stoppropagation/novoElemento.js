const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML','CSS','JavaScript','PHP']

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+chave+1)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    const lixeira = document.createElement('img')
    lixeira.setAttribute('src','./lixeira.png')
    lixeira.setAttribute('class','lixeira')
    novoElemento.appendChild(lixeira)
    lixeira.addEventListener('click',(evento)=>{
        caixa1.removeChild(evento.target.parentNode)
    })
    caixa1.appendChild(novoElemento)
})

