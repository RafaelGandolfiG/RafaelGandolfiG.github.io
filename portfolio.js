window.addEventListener('load', () => {
    const container1 = document.querySelector('.cabecalho');
    container1.classList.add('loaded');
});

window.addEventListener('load', () => {
    const container2 = document.querySelector('.topo');
    container2.classList.add('loaded');
});

const secao1=document.querySelector('.experiencia')

function controlarSecao1(){
    if (window.scrollY>=150){
        secao1.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao1)

const secao2=document.querySelector('.formacao')

function controlarSecao2(){
    if (window.scrollY>=800){
        secao2.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao2)

const secao3=document.querySelector('.certificados')

function controlarSecao3(){
    if (window.scrollY>=1200){
        secao3.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao3)

const secao4=document.querySelector('.footer-container')

function controlarSecao4(){
    if (window.scrollY>=1700){
        secao4.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao4)