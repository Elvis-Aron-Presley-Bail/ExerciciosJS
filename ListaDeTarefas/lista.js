const tarefas = document.querySelector('#tarefas')
const botao = document.querySelector('#botao')
const texto = document.querySelector('#texto')

botao.addEventListener('click',()=>{
    
    const tarefa = document.createElement('div')
    const lixeira = document.createElement('img')

    tarefa.innerHTML = texto.value

    tarefa.setAttribute('class','tarefa')
    lixeira.setAttribute('src', './lixeira.png')
    lixeira.setAttribute('class','lixeira')
    
    tarefas.appendChild(tarefa)
    tarefa.appendChild(lixeira)

    lixeira.addEventListener('click', (marcado) =>{
        const remover = tarefa.remove(marcado.target.parentNode)
    })

})