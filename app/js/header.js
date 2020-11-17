"use strict";

let main_menu;
let hamb_button;
let close_menu;

let user_menu_button;
let user_menu;

function openMainMenu() {
    main_menu.style.transform = `translateX(0vw)`;
}

function closeMainMenu() {
    main_menu.style.transform = `translateX(-100vw)`;
}

function openUserMenu() {
    user_menu.style.transform = `translateX(0)`;
}

function closeUserMenu() {
    user_menu.style.transform = `translateX(100%)`;
}

function handleUserMenu() {
    if (user_menu.classList.contains('closed')){
        openUserMenu();
        user_menu.classList.remove("closed");
        user_menu.classList.add("open");
        return true;
    }
    closeUserMenu();
    user_menu.classList.remove("open");
    user_menu.classList.add("closed")
    return true;    
}

function initHeader() {
    
    main_menu = document.querySelector("#main-menu");
    hamb_button = document.querySelector("#hamb-button");
    close_menu = document.querySelector("#close-menu");
    
    hamb_button.addEventListener("click", openMainMenu);
    close_menu.addEventListener("click", closeMainMenu);
    
    
    user_menu_button = document.querySelector("#user-menu-btn");
    user_menu = document.querySelector('#user-menu');
    user_menu.classList.add("closed");

    user_menu_button.addEventListener("click", handleUserMenu);
}

document.addEventListener("DOMContentLoaded", initHeader);