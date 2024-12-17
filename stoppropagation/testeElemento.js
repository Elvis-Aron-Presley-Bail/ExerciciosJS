const botao = document.querySelector('#botao')
const texto = document.querySelector('#texto')
const caixa = document.querySelector('#caixa1')

botao.addEventListener('click',() =>{
    const novoElemento = document.createElement('div')
    const lixeira = document.createElement('img')

    novoElemento.innerHTML = texto.value
    novoElemento.setAttribute('class','curso c1')
    novoElemento.setAttribute('id','c7')

    lixeira.setAttribute('src','./lixeira.png')
    lixeira.setAttribute('class','lixeira')
    
    caixa.appendChild(novoElemento)
    novoElemento.appendChild(lixeira)

    lixeira.addEventListener('click',(remover)=>{
        caixa.removeChild(remover.target.parentNode)
    })
   
})

