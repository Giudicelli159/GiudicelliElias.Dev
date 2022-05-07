var nAtual = '';
var buttons = document.querySelectorAll('.button');
var buttonClear = document.querySelector('.clear');
var buttonsO = document.querySelectorAll('.buttonOpera');
var tela = document.querySelector('.tela');

buttonClear.addEventListener('click', ()=>{
    clear();
});
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        digitar(i);
    });
}


function digitar(Atual){
    tela.value += buttons[Atual].value;
    // console.log(tela.value);
    // console.log(buttons[Atual].value);
}

function Operacao(){
    var valor = tela.value;
    valor += 4;
    tela.value = valor;
}

function clear(){
    tela.value = '';
}
