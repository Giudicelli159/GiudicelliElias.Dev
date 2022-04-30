var buttons = document.querySelectorAll('.div-skills ul a');
var atual = 0;
var primeiro = document.getElementById('0');
var section = document.getElementById('html');

primeiro.classList.add('active');

for(let i =0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        atual = buttons[i].id;
        mudarButton();

        if (section.className.endsWith('primeiraSection')){
            removerPrimeiraSection();
        }else{

        }
        
    });
}

function mudarButton(){
    document.querySelector('.active').classList.remove('active');
    document.getElementById(atual).classList.add('active');
}

function removerPrimeiraSection(){
    document.querySelector('.primeiraSection').classList.remove('primeiraSection');

}

