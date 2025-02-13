const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const cursos = ['HTML','CSS','JS','PHP','SQL','SASS']

cursos.map((nome) =>{

    const novoCurso = document.createElement('div')
    novoCurso.setAttribute('class' , 'curso')
    caixa1.appendChild(novoCurso)
    novoCurso.innerHTML = nome
    
    const lixeira = document.createElement('img')
    lixeira.setAttribute('src' , './lixeira.png')
    lixeira.setAttribute('class' , 'lixeira')
    novoCurso.appendChild(lixeira)

    lixeira.addEventListener('click', (evt) =>{
        caixa1.removeChild(evt.target.parentNode)
    })

    
})