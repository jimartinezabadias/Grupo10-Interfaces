let input;

function mostrarInput() {
    input = document.getElementsByClassName("bloque-feedback")[0];

    if(input.classList.contains("ocultar")) {
        input.classList.remove("ocultar");
    }else {
        input.classList.add("ocultar");
    }
}

let contenido;
let tags;

function publicar() {
    contenido = document.getElementById("contenido-input").value;

    if(contenido.length > 0) {
        //oculto el input de nuevo
        document.getElementsByClassName("bloque-feedback")[0].classList.add("ocultar");
        //asigno el texto del input al comentario oculto
        document.getElementById("texto-oculto").innerHTML = contenido;
        //muestro el comentario oculto
        document.getElementById("comentario-oculto").removeAttribute("style");
    }else if(contenido.length == 0) {
        contenido = "No pusiste texto, esto es un ejemplo de como se veria."
        //oculto el input de nuevo
        document.getElementsByClassName("bloque-feedback")[0].classList.add("ocultar");
        //asigno el texto del input al comentario oculto
        document.getElementById("texto-oculto").innerHTML = contenido;
        //muestro el comentario oculto
        document.getElementById("comentario-oculto").removeAttribute("style");
    }

    //limpiar el input
    contenido = '';
    //desactivar los tags
    tags = document.getElementsByClassName("tag-btn");
    for (let i = 0; i < tags.length; i++) {
        if(tags[i].classList.contains("selected")) {
            tags[i].classList.remove("selected");
        }
    }
}


let tag;

function activarTag(nombre) {
    tag = document.getElementsByClassName(nombre)[0];

    if(tag.classList.contains("selected")) {
        tag.classList.remove("selected");
    }else {
        tag.classList.add("selected");
    }
}

let texto;

function expandirComentario(nombre) {
    texto = document.getElementsByClassName(nombre);

    if(texto[1].classList.contains("expandido")) {
        texto[1].classList.remove("expandido");
        texto[1].innerHTML = 'Un comentario es una apreciación o escrito sobre cualquier cosa puesta...';
        texto[0].setAttribute("style", "display: none;");
    }else {
        texto[1].classList.add("expandido");
        texto[1].innerHTML = 'Un comentario es una apreciación o escrito sobre cualquier cosa puesta en análisis.';
        texto[0].setAttribute("style", "display: flex;");
    }
}