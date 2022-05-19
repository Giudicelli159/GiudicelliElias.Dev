(function(){
    var $body = document.querySelector('.body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.links-header',
        btn: '.button-header',
        widthEnabled: 980

    })
})()