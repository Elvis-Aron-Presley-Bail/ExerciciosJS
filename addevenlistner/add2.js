const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#btn_copiar')
const elementos = [...document.querySelectorAll('.caixa')]

elementos.map((el) =>{
    el.addEventListener('click', (elm) => {
        const marcado = elm.target
        marcado.classList.toggle('.selecionado')
    })
})

