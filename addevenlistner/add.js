const caixa1 = document.querySelector('#caixa1') //chamando a primeira caixa
const caixa2 = document.querySelector('#caixa2') //chamando a sugunda caixa
const btn = document.querySelector('#btn_copiar') //chamando o botão
const todosCursos = [...document.querySelectorAll('.curso')] //pegando todos os elementos com classe curso e transformando eles em um array atraves do [...]

todosCursos.map((el)=>{ //pegando a const todosCursos e usando o .map para pegar todos os arrays citados acima. Também adicionei um elemento 'el' que será chamado dentro da função
    el.addEventListener('click',(evt) => { //chamei o elemento 'el' e adicionei um evento que ele irá realizar 'click'. Também adicionei um elemento 'evt' que será chamado dentro da função
        const curso = evt.target //criei uma const chamado curso e declarei que, ao clicar, o elemento evt sera marcado
        curso.classList.toggle('selecionado') //chamei o elemento curso, usei o toggle para verificar se ele foi clicado ou não. Quando clicado adiciona a class 'selecionado' ao elemento
    })
})

btn.addEventListener('click', ()=>{ //chamei o botão e adicionei um evento de clicar
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')] //criei uma const para pegar todos os elementos quais foram adicionados a class selecionado, mediante os acontecimantos acima
    cursoSelecionado.map((el)=>{ //chamei todos os elementos acima usando o .map e coloquei dentro de 'el'
        caixa2.appendChild(el) //chamei a caixa2 e utilizei o .appendChiel para adicionar elementos nessa div, adicionaei os elementos que estão dentro de 'el', que eu criei logo acima
    })
})

botaoVoltar.addEventListener('click', ()=>{
    const desmarcado = [...document.querySelectorAll('.curso:not(.selecionado)')]
    desmarcado.map((el)=>{
        caixa1.appendChild(el)
    })
})