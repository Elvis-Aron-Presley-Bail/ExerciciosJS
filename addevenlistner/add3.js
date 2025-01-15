const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const caixas = [...document.querySelectorAll('.caixa')]
const botaoCopiar = document.getElementById('btn_copiar')
const botaoVoltar = document.getElementById('btn_voltar')
const cursos = ['HTML' , 'CSS' , 'JS']

caixas.map((el) =>{
    el.addEventListener('click', (evt) =>{
        const marcado = evt.target
        marcado.classList.toggle('selecionado')
    })
})

botaoCopiar.addEventListener('click', (evt) =>{
    const selecionado = [...document.querySelectorAll('.selecionado')]
    selecionado.map((sele) =>{
        caixa2.appendChild(sele)
    })
})

botaoVoltar.addEventListener('click', (evt) =>{
    const naoSelecionado = [...document.querySelectorAll('.curso:not(.selecionado)')]
    naoSelecionado.map((el) =>{
        caixa1.appendChild(el)
    })
})


cursos.map((el) =>{
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = el
    novoElemento.setAttribute('id' , 'c1')
    novoElemento.setAttribute('class' , 'curso c1')

    caixa1.appendChild(novoElemento)
})
