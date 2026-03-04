function insta(){
    window.location.href='https://www.instagram.com/corinthians/';
}

const btninsta = document.getElementById('insta');
if (btninsta) btninsta.onclick=insta;

function voltar(){
    window.location.href='home.html';
}

const btnvoltar = document.getElementById('voltar');
if (btnvoltar) btnvoltar.onclick=voltar;

function transfermarkt(){
    window.location.href='https://www.transfermarkt.com.br/sc-corinthians/startseite/verein/199#google_vignette';
}

const btntr = document.getElementById('transfermarkt');
if (btntr) btntr.onclick=transfermarkt;

function youtube(){
    window.location.href='https://www.youtube.com/@corinthians';
}

const btnytb = document.getElementById('ytb');
if (btnytb) btnytb.onclick=youtube;

function twitter(){
    window.location.href='https://x.com/Corinthians';
}

const btnx = document.getElementById('x');
if (btnx) btnx.onclick=twitter;

window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('loaded');
});

window.addEventListener('load', () => {
    const container1 = document.querySelector('.secoes');
    container1.classList.add('loaded');
});

const secao1=document.querySelector('.topo')

function controlarSecao1(){
    if (window.scrollY>=100){
        secao1.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao1)

const secao2=document.querySelector('.arena')

function controlarSecao2(){
    if (window.scrollY>=800){
        secao2.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao2)

const secao3=document.querySelector('.atletas')

function controlarSecao3(){
    if (window.scrollY>=2400){
        secao3.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao3)

const secao4=document.querySelector('.produtos')

function controlarSecao4(){
    if (window.scrollY>=5400){
        secao4.classList.add('ativo');
    }
}

window.addEventListener('scroll',controlarSecao4)