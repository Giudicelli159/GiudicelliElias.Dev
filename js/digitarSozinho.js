const span = document.querySelector(".home__title___text--name");
const text = "Giudicelli Elias";
const interval = 150;

function digitar(span, text, interval){
    const char = text.split("").reverse();
    const typer = setInterval(()=>{
        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        span.innerHTML += next;

    }, interval);
}

digitar(span, text, interval);