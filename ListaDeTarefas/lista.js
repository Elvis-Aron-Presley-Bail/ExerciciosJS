const tarefas = document.querySelector('#tarefas')
const botao = document.querySelector('#botao')
const texto = document.querySelector('#texto')
const itensRemovidos = document.querySelector('#itensRemovidos')
const removidos = document.querySelector('#removidos')
const bottao = document.querySelector('#ver')

botao.addEventListener('click',()=>{
    
    const tarefa = document.createElement('div')
    const lixeira = document.createElement('img')

    tarefa.innerHTML = texto.value

    tarefa.setAttribute('class','tarefa')
    lixeira.setAttribute('src', './lixeira.png')
    lixeira.setAttribute('class','lixeira')
    
    tarefas.appendChild(tarefa)
    tarefa.appendChild(lixeira)

    tarefa.addEventListener('click',(marcado)=>{
        const itemSelecionado = marcado.target
        itemSelecionado.classList.toggle('selecionado')
    })

    lixeira.addEventListener('click', () =>{
        const marcados = [...document.querySelectorAll('.selecionado')]
        marcados.map((elem)=>{
            removidos.appendChild(elem)
        })

    })

    bottao.addEventListener('click',()=>{
        removidos.style.backgroundColor = 'blue'
    })

})

