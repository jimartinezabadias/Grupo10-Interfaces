let botonmenu = document.getElementById("boton-extensible");
let menuextensible = document.getElementsByClassName("menu-extensible")[0];
let flecha = document.getElementById("flecha");
botonmenu.onclick = function() {
    if(botonmenu.classList.contains("active")) {
        botonmenu.classList.remove("active");
        menuextensible.classList.add("ocultar");
        flecha.style.transform = "rotate(180deg)";
    }else if(!botonmenu.classList.contains("active")) {
        botonmenu.classList.add("active");
        menuextensible.classList.remove("ocultar");
        flecha.style.transform = "rotate(0deg)";
    }  
};