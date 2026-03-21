const display=document.querySelector('.display');
function add(elemento){
    display.innerText+=elemento;
}
function apagar(){
    display.innerText='';
}
function resultado(){
    try{
        let resultado=display.innerText;
        display.innerText=eval(resultado);
    }
    catch{
        display.innerText='erro';
    }
}