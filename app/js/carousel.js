"use strict";

let leftBtn;
let rigthBtn;
let container;
let scrolling = -1;

function scrollLeft() {
    if(scrolling==-1)
        scrolling = setInterval(moveLeft, 80);
}

function scrollRigth() {
    if(scrolling==-1)
        scrolling = setInterval(moveRight, 80);
}

function moveLeft() {
    container.scrollLeft -= 30;
}

function moveRight() {
    container.scrollLeft += 30;
}

function stopScroll() {
    if(scrolling!=-1){
        clearInterval(scrolling);
        scrolling = -1;
    }
}

function initCarousel() {
    
    container = document.querySelector("#novedades > .cards-carousel");

    leftBtn = document.querySelector(".carousel-left-btn");
    rigthBtn = document.querySelector(".carousel-rigth-btn");

    rigthBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
    
    rigthBtn.addEventListener("mousedown", scrollRigth);
    leftBtn.addEventListener("mousedown", scrollLeft);
    rigthBtn.addEventListener("mouseup", stopScroll);
    leftBtn.addEventListener("mouseup", stopScroll);
}

document.addEventListener("DOMContentLoaded", initCarousel);