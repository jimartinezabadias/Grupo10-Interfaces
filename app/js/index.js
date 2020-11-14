"use strict";

let btnComenzar = document.querySelector(".btn-comenzar");
let btnIngresar = document.querySelector(".btn-ingresar");
let heroText = document.querySelector("#hero-text");
let modal = document.querySelector(".modal");

let width = window.innerWidth;

btnComenzar.addEventListener("click", function(){
    if(width > 768){
        modal.style.display = "grid";
        heroText.style.display = "none";
    }else{
        window.open("login.html", "_self");
    }
});

if(width > 768){
    btnIngresar.addEventListener("click", function(){
        modal.style.display = "grid";
        heroText.style.display = "none";
    });
}