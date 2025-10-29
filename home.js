function paginadev(){
    alert('Indo para a pagina do dev...');
    window.location.href= 'paginadev.html';
}
const btndev=document.getElementById('paginadev')
if (btndev) btndev.onclick=paginadev;

function paginaexercicio(){
    alert('Indo para a pagina do exercicio...');
    window.location.href= 'exercicio.html';
}
const btnexercicio=document.getElementById('exercicio');
if (btnexercicio) btnexercicio.onclick= paginaexercicio;

function sair(){
    alert('Saindo...');
    window.location.href= 'index.html';
}
const sair1=document.getElementById('sair');
if (sair1) sair1.onclick=sair;