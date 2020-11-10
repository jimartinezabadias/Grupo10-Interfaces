"use strict";

let main_menu;
let hamb_button;
let close_menu;

function setSearchLink() {
    let search_button = document.querySelector("#search-button");
    
    let width = window.innerWidth;

    if (width > 768){
        search_button.href = "resultados.html";
        return false;
    }
    
    search_button.href = "buscar.html";

}

function openMainMenu() {
    main_menu.style.transform = `translateX(0vw)`;
}

function closeMainMenu() {
    main_menu.style.transform = `translateX(-100vw)`;
}

function initHeader() {
    
    main_menu = document.querySelector("#main-menu");
    hamb_button = document.querySelector("#hamb-button");
    close_menu = document.querySelector("#close-menu");
    
    setSearchLink();

    hamb_button.addEventListener("click", openMainMenu);
    close_menu.addEventListener("click", closeMainMenu);

}

document.addEventListener("DOMContentLoaded", initHeader);