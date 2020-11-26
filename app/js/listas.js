"use strict"

let favButtons;

function animateFav() {
    let li = this.parentElement.parentElement.parentElement;
    let icon = this.childNodes[1];
    li.classList.add("favorita");
    icon.setAttribute("fill", "#EB5757");
    icon.setAttribute("stroke", "#EB5757");
}

function initList() {
    
    favButtons = document.querySelectorAll(".opciones-btn");

    favButtons.forEach(btn => {
        btn.addEventListener("click", animateFav);
    });

}

document.addEventListener("DOMContentLoaded", initList);