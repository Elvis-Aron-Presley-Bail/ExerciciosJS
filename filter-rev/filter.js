const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const nomeCurso = document.querySelector('#nomeCurso')
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML',"CSS","JAVASCRIPT"]
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnAdicionar = document.querySelector('#btnAdicionarNovoCurso')

cursos.map((el)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id' , 'c')
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el

    caixaCursos.appendChild(novoElemento)
    
})
