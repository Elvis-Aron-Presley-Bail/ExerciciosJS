const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const nomeCurso = document.querySelector('#nomeCurso')
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML',"CSS","JAVASCRIPT",'PHP','SQL']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnAdicionar = document.querySelector('#btnAdicionarNovoCurso')

cursos.map((el)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id' , 'c')
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src' , './lixeira.png')
    lixeira.setAttribute('class' , 'btn_lixeira')
    novoElemento.appendChild(lixeira)

    novoElemento.addEventListener('click', (evt) =>{
        const itemMarcado = evt.target
        itemMarcado.classList.toggle('selecionado')
    })

    btnCursoSelecionado.addEventListener('click', (evt) =>{
        const verMarcado = [...document.querySelectorAll('.selecionado')]
        alert(verMarcado[0].firstChild.children[0].innerHTML)
    })

    lixeira.addEventListener('click', (evt) =>{
        caixaCursos.removeChild(evt.target.parentNode)
    })

    caixaCursos.appendChild(novoElemento)
    
})