(function(){
    var $body = document.querySelector('.body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.nav__links',
        btn: '.header__button',
        widthEnabled: 980

    })
})()