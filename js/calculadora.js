var nAtual = '';
var buttons = document.querySelectorAll('.button');
var buttonClear = document.querySelector('.clear');
var buttonsO = document.querySelectorAll('.buttonOpera');
var tela = document.querySelector('.tela');
var valor01 = 0;
var valor02 = 0;

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
    valor01 = tela.value;
    for(let i =0; i > tela.value.length; i++){
        if(tela.value[i] === '+'){
            
        }
    }
    valor += 4;
    tela.value = valor;
}

function clear(){
    tela.value = '';
}
