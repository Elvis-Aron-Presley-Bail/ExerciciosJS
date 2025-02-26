const caixaCursos = document.querySelector('#caixaCursos')
const cursoMovido = document.querySelector('#cursoMovido')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML','CSS','JavaScript','PHP','React']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const moverCurso = document.querySelector('#moverCurso')
const btnAdicionarNovoCurso = document.querySelector('#btnAdicionarNovoCurso')

let indice = 0

const criarNovoCurso =(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id' , 'c' + indice)
    novoElemento.setAttribute('class' , 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class' , 'comandos')

    const radi = document.createElement('input')
    radi.setAttribute('type' , 'radio')
    radi.setAttribute('name' , 'rb_cursos')
    
    novoElemento.appendChild(comandos)
    comandos.appendChild(radi)

    return novoElemento
}

cursos.map((ele,pos) =>{

    const novoElemento = criarNovoCurso(ele)
    caixaCursos.appendChild(novoElemento)
    indice++
    
})

const cursoMarcado = () =>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((ele) =>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click' , (evt) =>{
    const re = cursoMarcado()
    const cursoSelecionado = re.parentNode.previousSibling.textContent
    alert('Curso selecionado: ' + cursoSelecionado)
})

btnRemoverCurso.addEventListener('click' , (evt) =>{
    const re = cursoMarcado()
    const cursoRemover = re.parentNode.parentNode
    cursoRemover.remove()
})

moverCurso.addEventListener('click' , (evt) =>{
    const re = cursoMarcado()
    const cursoMover = re.parentNode.parentNode
    cursoMovido.appendChild(cursoMover)
})

btnAdicionarNovoCurso.addEventListener('click' , (evt) =>{
    
})