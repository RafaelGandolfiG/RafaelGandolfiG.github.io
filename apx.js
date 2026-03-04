function insta(){
    window.location.href='https://www.instagram.com/apxgpf1team/';
}

const btninsta = document.getElementById('instagram');
if (btninsta) btninsta.onclick=insta;

function voltar(){
    window.location.href='home.html';
}

const btnvoltar = document.getElementById('voltar');
if (btnvoltar) btnvoltar.onclick=voltar;

window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('loaded');
});

const secao1=document.querySelector('.parte2')

function controlarSecao1(){
    if (window.scrollY>=100){
        secao1.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao1)

const secao2=document.querySelector('.parte4')

function controlarSecao2(){
    if (window.scrollY>=500){
        secao2.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao2)

const secao3=document.querySelector('.parte11')

function controlarSecao3(){
    if (window.scrollY>=1400){
        secao3.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao3)

const secao4=document.querySelector('.parte12')

function controlarSecao4(){
    if (window.scrollY>=1400){
        secao4.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao4)

const secao5=document.querySelector('.parte7')

function controlarSecao5(){
    if (window.scrollY>=1800){
        secao5.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao5)

const secao6=document.querySelector('.parte8')

function controlarSecao6(){
    if (window.scrollY>=1800){
        secao6.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao6)
