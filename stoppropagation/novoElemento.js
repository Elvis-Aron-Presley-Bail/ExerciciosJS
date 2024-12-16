const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML','CSS','JavaScript','PHP']

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+chave+1)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
    novoElemento.addEventListener('click', (evt)=>{
        caixa1.removeChild(evt.target)
    })
})