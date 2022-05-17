var buttons = document.querySelectorAll('.div-skills ul p');
var paragrafos = document.querySelectorAll('.skillsText')
var atualButton = 0;
var atualParagrafo = 'html';
var primeiro = document.getElementById('0');
var section = document.getElementById('html');

primeiro.classList.add('active-button');
section.classList.add('active-paragrafo')

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        atualButton = buttons[i].id;
        mudarButton();
        atualParagrafo = paragrafos[i].id;
        mudarParagrafo();
 
        
    });
}


function mudarButton(){
    document.querySelector('.active-button').classList.remove('active-button');
    document.getElementById(atualButton).classList.add('active-button');
}

function mudarParagrafo(){
    document.querySelector('.active-paragrafo').classList.remove('active-paragrafo');
    document.getElementById(atualParagrafo).classList.add('active-paragrafo');

}


