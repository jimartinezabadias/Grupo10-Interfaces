"use strict";

let btnComenzar = document.querySelector(".btn-comenzar");
let btnIngresar = document.querySelector("#ingresar-btn");
let heroText = document.querySelector("#hero-text");
let modal = document.querySelector(".modal");

let widthc = window.innerWidth;

btnComenzar.addEventListener("click", function(){
    if(widthc > 768){
        modal.style.display = "grid";
        heroText.style.display = "none";
    }else{
        window.open("login.html", "_self");
    }
});


btnIngresar.addEventListener("click", function(){
    if(widthc > 768){
        modal.style.display = "grid";
        heroText.style.display = "none";
    }
});