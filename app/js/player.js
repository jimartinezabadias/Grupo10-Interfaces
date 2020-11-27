"use strict";

let mostarComentariosBtn;
let listaComentarios;
let comentariosSection;
let opinarBtn;

function mostrarComentarios() {
    if (listaComentarios.classList.contains("minimizada")){
        console.log("abrir comentarios");
        listaComentarios.classList.remove("minimizada");
        comentariosSection.classList.remove("small");
        comentariosSection.classList.add("large");
        return true;
    }
    listaComentarios.classList.add("minimizada");
    comentariosSection.classList.remove("large");
    comentariosSection.classList.add("small");
    console.log("cerrar comentarios");
}

function initPlayer() {
    
    mostarComentariosBtn = document.querySelector("#mostrar-comentarios-btn");
    listaComentarios = document.querySelector(".lista-comentarios");
    comentariosSection = document.querySelector("#comentar");
    opinarBtn = document.querySelector(".boton-comentario");

    mostarComentariosBtn.addEventListener("click", mostrarComentarios);
    opinarBtn.addEventListener("click", mostrarComentarios);
    
}

document.addEventListener("DOMContentLoaded", initPlayer);