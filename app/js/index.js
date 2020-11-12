"use strict";

let btnComenzar = document.querySelector(".btn-comenzar");
let btnIngresar = document.querySelector(".btn-ingresar");
let heroText = document.querySelector("#hero-text");
let modal = document.querySelector(".modal");

let width = window.innerWidth;

if(window.location.pathname == "/app/index.html"){
    btnComenzar.addEventListener("click", function(){
        if(width > 768){
            modal.style.display = "grid";
            heroText.style.display = "none";
        }else{
            window.open("../app/html/login.html", "_self");
        }
    });

    btnIngresar.addEventListener("click", function(){
        modal.style.display = "grid";
        heroText.style.display = "none";
    });
}

window.addEventListener("resize",function(){ 
    width = window.innerWidth;
    if(window.location.pathname == "/app/index.html"){
        if(width < 768 && modal.style.display == "grid"){
            window.open("../app/html/login.html", "_self");
        }
    }else if((window.location.pathname == "/app/html/login.html" || window.location.pathname == "/app/html/register.html") && width > 768){
        window.open("../index.html", "_self");
    }
});