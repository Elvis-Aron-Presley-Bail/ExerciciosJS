const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const caixinha1 = document.querySelector('#caixinha1')
const caixinha2 = document.querySelector('#caixinha2')
const cursos = [...document.querySelectorAll('.curso')]
const btn_copiar = document.querySelector('#btn_copiar')

cursos.map((elementos1)=>{
    elementos1.addEventListener('dblclick', (clicouduas)=>{
        const clicouduasveses = clicouduas.target
        clicouduasveses.classList.toggle('selecionadoduas')
    })
})

cursos.map((elementos2)=>{
    elementos2.addEventListener('click', (clicou)=>{
        const selecionado = clicou.target
        selecionado.classList.toggle('selecionado')
    })
})

btn_copiar.addEventListener('click', ()=>{
    const clicadouma = [...document.querySelectorAll('.selecionado')]
    const clicadoduas = [...document.querySelectorAll('.selecionadoduas')]
    clicadouma.map((aqui) =>{
        caixinha1.appendChild(aqui)
    })
    clicadoduas.map((ali)=>{
        caixinha2.appendChild(ali)
    })
})


btn_copiar.addEventListener('click', ()=>{
    const cursovoltar = [...document.querySelectorAll('.curso:not(.selecionado):not(.selecionadoduas)')]
    cursovoltar.map((voltar)=>{
        caixa1.appendChild(voltar)
    })
})

