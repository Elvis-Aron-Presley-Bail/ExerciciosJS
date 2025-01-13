const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const caixas = [...document.querySelectorAll('.caixa')]
const botaoCopiar = document.getElementById('btn_copiar')
const botaoVoltar = document.getElementById('btn_voltar')

caixas.map((el) =>{
    el.addEventListener('click', (evt)=>{
        const marcado = evt.target
        marcado.classList.toggle('selecionado')
    })
})

botaoCopiar.addEventListener('click', () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((el)=>{
        caixa2.appendChild(el)
    })
})