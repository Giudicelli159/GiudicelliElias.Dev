function Menu(config){
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.btn = (typeof config.btn === 'string') ? document.querySelector(config.btn) : config.btn;

    this.maxWidth = config.widthEnabled || false;

    var _opened = false;

    var _this = this;

    this.btn.removeAttribute('style');

    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style');
                _opened = true; 
            }else if(!this.nav.getAttribute('style')){
                closeMenu();
            }
        })

        if(window.innerWidth <= -this.maxWidth){
            closeMenu();
        }
    }

    this.btn.addEventListener('click', openOrclose)

    function openOrclose(){
        if(!_opened){
            openMenu();
        }else{
            closeMenu();
        }
    }

    function openMenu(){
        var _top = _this.nav.getBoundingClientRect().top + 'px'; 

        var _style = {
            maxHeight: "173px",
            overflow: 'hidden'
        }

        applyStyleToNav(_style);

        _opened = true; 
    }

    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => { 
            _this.nav.style[stl] = _style[stl];
    
        } )

    }

    function closeMenu(){
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }

        applyStyleToNav(_style);

        _opened = false;
    }

}