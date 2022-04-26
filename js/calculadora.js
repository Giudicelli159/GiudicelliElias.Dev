var nAtual = null;
var buttonsN = document.querySelectorAll('.buttonNumber');
document.querySelector('.tela').textContent = 'alert';
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
