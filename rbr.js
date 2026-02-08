function instagram(){
    window.location.href='https://www.instagram.com/redbullracing/';
}
const btninsta=document.getElementById('instagram');
if (btninsta) btninsta.onclick=instagram;

function ytb(){
    window.location.href='https://www.youtube.com/@redbullracing';
}
const btnytb=document.getElementById('ytb');
if (btnytb) btnytb.onclick=ytb;

function twitter(){
    window.location.href='https://x.com/redbullracing/';
}
const btntt=document.getElementById('twitter');
if (btntt) btntt.onclick=twitter;

function voltar(){
    window.location.href='home.html';
}
const btnvoltar=document.getElementById('voltar');
if (btnvoltar) btnvoltar.onclick=voltar;

const topo = document.getElementById('topo');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        topo.classList.remove('ativo');
    } else {
        topo.classList.add('ativo');
    }
});
