//Exercicio 1-
function cores(){
    let cor=document.getElementById('cor').value.toLowerCase();
    if (cor===''){
        document.getElementById('default').innerHTML='Digite uma cor';
        return;
    }
    switch(cor){
        case 'azul':
            document.body.style.backgroundColor='blue';
            break;
        case 'amarelo':
            document.body.style.backgroundColor='yellow';
            break;
        case 'vermelho':
            document.body.style.backgroundColor='red';
            break;
        case 'verde':
            document.body.style.backgroundColor='green';
            break;
        default:
            document.getElementById('default').innerHTML='nenhuma cor disponivel para: '+cor;
    }
}
const btncolorir= document.getElementById('colorir');
if (btncolorir) btncolorir.onclick=cores;

//Exercicio 2-
const numerosex2=[]
function adicionar(){
    let numero=document.getElementById('numero').value;
    numero=parseInt(numero);
    if (isNaN(numero)) {
        alert('Por favor, digite um número valido!');
        return;
    }
    else{
        numerosex2.push(numero);
        document.getElementById('resposta').innerHTML='numeros adicionados: '+numerosex2;
    }
}
const btnadd=document.getElementById('adicionar');
if (btnadd) btnadd.onclick=adicionar;

function menorNumero(){
    let menor=Math.min.apply(null,numerosex2);
    if (numerosex2.length===0){
        document.getElementById('resposta').innerHTML+='<br>Nenhum numero digitado';
        return
    }
    else{
        document.getElementById('resposta').innerHTML+='<br>O menor numero eh: '+menor;
    }
}
const btnmenor= document.getElementById('menor');
if (btnmenor) btnmenor.onclick=menorNumero;

//Exercicio 3
let contador=0;
function contar(){
    contador++;
    document.getElementById('cont').innerHTML='O contador esta com '+contador+' cliques';
}
function zerar(){
    contador = 0 
    document.getElementById('cont').innerHTML='O contador esta com '+contador+ 'cliques';
}
const btnclique=document.getElementById('contador');
if (btnclique) btnclique.onclick=contar;

const zera=document.getElementById('zera');
if (zera) zera.onclick=zerar;

//Exercicio 4
function mediaAluno() {
  let nome = prompt('Qual e o nome do aluno?');
  let nota1 = prompt('Qual e a primeira nota de ' + nome + '?');
  let nota2 = prompt('Qual e a segunda nota de ' + nome + '?');
  if (nota1 === '' || nota2 === '') {
    alert('Voce deixou alguma nota em branco!');
    return;
  }
  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  if (isNaN(nota1) || isNaN(nota2)) {
    alert('Por favor, digite apenas numeros validos!');
    return
  }
  let media = (nota1 + nota2) / 2;
  document.getElementById('resp').innerHTML =`Calculando a media final de ${nome}<br>As notas obtidas foram ${nota1} e ${nota2}<br> A media final sera ${media}`
}
const btnmedia = document.getElementById('media');
if (btnmedia) btnmedia.onclick = mediaAluno;

//Exercicio 5
function parimpar(){
    let epar=true;
    let numero=prompt('Digite um numero: ');
    if(numero===''){
        document.getElementById('res').innerHTML='Digite um numero';
        return
    }
    else if (isNaN(numero)){
        document.getElementById('res').innerHTML='Digite um numero valido';
        return
    }
    numero=parseFloat(numero);
    if (numero%2!=0){
        epar=false;
        if (epar===false){
            document.getElementById('res').innerHTML=`O numero ${numero} eh impar`;
        }
    }
    else{
        document.getElementById('res').innerHTML=`O numero ${numero} eh par`;
    }
}

const btnvalidar=document.getElementById('validar');
if (btnvalidar) btnvalidar.onclick=parimpar;

// Exercicio 6
function maiorNumero() {
    let n1 = prompt('Digite um número: ');
    let n2 = prompt('Digite outro número: ');
    if (n1 === '' || n2 === '') {
        alert('Você esqueceu um número');
        return;
    } 
    else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        if (isNaN(n1) || isNaN(n2)) {
            alert('Digite um número valido');
            return;
        } 
        else if (n1 > n2) {
            document.getElementById('maior').innerHTML = 
                `Analisando os valores ${n1} e ${n2}<br>O maior é o ${n1}`;
        } 
        else if (n2 > n1) {
            document.getElementById('maior').innerHTML = 
                `Analisando os valores ${n1} e ${n2}<br>O maior é o ${n2}`;
        } 
        else {
            document.getElementById('maior').innerHTML = 
                `Analisando os valores ${n1} e ${n2}<br>Os números são iguais`;
        }
    }
}
const btnmaior = document.getElementById('maiornumero');
if (btnmaior) btnmaior.onclick = maiorNumero;

//Exercicio 7
function operacoes(){
    let n1=prompt('Digite o primeiro valor: ');
    let n2=prompt('Digite o segundo valor: ');
    if (n1==='' || n2===''){
        n1=0;
        n2=0;
    }
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    if(isNaN(n1)||isNaN(n2)){
        alert('Digite um numero valido');
        return;
    }
    let operacoes=prompt(`Valores informados ${n1} e ${n2}\nO que vamos fazer?\n[1]-somar\n[2]-subtrair\n[3]-multiplicar\n[4]-dividir`);
    operacoes=parseFloat(operacoes);
    switch(operacoes){
        case 1:
            document.getElementById('result').innerHTML=`Operaçao soma<br>${n1} + ${n2} = ${n1+n2}`;
            break;
        case 2:
            document.getElementById('result').innerHTML=`Operaçao subtraçao<br>${n1} - ${n2} = ${n1-n2}`;
            break;
        case 3:
            document.getElementById('result').innerHTML=`Operaçao multiplicaçao<br>${n1} * ${n2} = ${n1*n2}`;
            break;
        case 4:
            document.getElementById('result').innerHTML=`Operaçao divisao<br>${n1} / ${n2} = ${n1/n2}`;
            break;
        default:
            document.getElementById('result').innerHTML=`Opçao invalida<br>voce digitou ${n1} e ${n2}\nmas nao sei oque fazer com eles`;
            break;
    }
}
const btnoperacoes=document.getElementById('operaçoes');
if (btnoperacoes) btnoperacoes.onclick=operacoes;

//Exercicio 8
const numerosex8=[]
function add(){
    let numero=document.getElementById('maior2').value;
    if (isNaN(numero)){
        alert('Digite um numero valido');
        return
    }
    else if(numero===''){
        document.getElementById('re').innerHTML='Digite um numero'
        return
    }
    else{
        numerosex8.push(numero);
        document.getElementById('re').innerHTML='Numeros adicionados '+numerosex8;
    }

}

function maior2(){
    let maior = Math.max.apply(null,numerosex8);
    if (numerosex8.length===0){
        document.getElementById('re').innerHTML+='<br>Nenhum numero digitado';
    }
    else{
        document.getElementById('re').innerHTML+='<br>O maior numero eh: '+maior;
    }
}
const btnadicionar = document.getElementById('add2');
if (btnadicionar) btnadicionar.onclick=add;

const btnMaior=document.getElementById('r');
if (btnMaior) btnMaior.onclick=maior2;

//voltar para a pagina inicial
function voltar(){
    window.location.href= 'home.html';
}
const sair1=document.getElementById('sair');
if (sair1) sair1.onclick=voltar;