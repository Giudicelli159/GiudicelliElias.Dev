var nAtual = null;
var buttonsN = document.querySelectorAll('.buttonNumber');
document.getElementsByClassName('tela').value= 'dasas';
for(let i = 0; buttonsN.length; i++){
    buttonsN[i].addEventListener('click', ()=>{
        alert("OI");
        document.querySelector("[name='tela']").value = 'alert';
    });
}


function numeroAtual (){
    alert("OI");
    document.querySelector("[name='tela']").value = 'alert';
}
