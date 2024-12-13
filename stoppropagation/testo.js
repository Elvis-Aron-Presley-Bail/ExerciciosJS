const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelector('#c1');
const caixinha1 = document.querySelector('#caixinha1');
const caixinha2 = document.querySelector('#caixinha2');
const cursos = [...document.querySelectorAll('.curso')];
const btn_copiar = document.querySelector('#btn_copiar');

cursos.forEach((elementos1) => {
    elementos1.addEventListener('dblclick', (clicouduas) => {
        const clicouduasveses = clicouduas.target;
        clicouduasveses.classList.toggle('selecionadoduas');
    });
});

cursos.forEach((elementos2) => {
    elementos2.addEventListener('click', (clicou) => {
        const selecionado = clicou.target;
        selecionado.classList.toggle('selecionado');
    });
});

btn_copiar.addEventListener('click', () => {
    const clicadouma = [...document.querySelectorAll('.selecionado')];
    const clicadoduas = [...document.querySelectorAll('.selecionadoduas')];
    clicadouma.forEach((aqui) => {
        caixinha1.appendChild(aqui);
    });
    clicadoduas.forEach((ali) => {
        caixinha2.appendChild(ali);
    });

    const cursovoltar = [...document.querySelectorAll('.curso:not(.selecionado):not(.selecionadoduas)')];
    cursovoltar.forEach((voltar) => {
        caixa1.appendChild(voltar);
    });
});
