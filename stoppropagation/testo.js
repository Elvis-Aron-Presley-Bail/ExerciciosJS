const caixinha1 = document.querySelector('#caixinha1')
const caixinha2 = document.querySelector('#caixinha2')
const caixa1 = document.querySelector('#caixa1')
const curso = [...document.querySelectorAll('.curso')]
const botao = document.querySelector('#btn_copiar')

curso.map((cursos) => {
    cursos.addEventListener('click',(clicado) => {
        const cursosMarcados = clicado.target
        cursosMarcados.classList.toggle('selecionado')
    })
    cursos.addEventListener('dblclick', (clicadoduas) => {
        const marcadoDuas = clicadoduas.target
        marcadoDuas.classList.toggle('selecionadoduas')
    })
})

botao.addEventListener('click',() => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    const cursoSelecionadoDuas = [...document.querySelectorAll('.selecionadoduas')]
    const descelacionado = [...document.querySelectorAll('.curso:not(.selecionado):not(.selecionadoduas)')]

    cursoSelecionado.map((seleci) => {
        caixinha1.appendChild(seleci)
    })

    cursoSelecionadoDuas.map((seleciduas) => {
        caixinha2.appendChild(seleciduas)
    })

    descelacionado.map((naomarcado) => {
        caixa1.appendChild(naomarcado)
    })

})