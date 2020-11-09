function showDropdown(nombre) {
    let elemento = document.getElementById(nombre);
    
    if(elemento.style.display == "none") {
        elemento.style.setProperty('display', 'block');
    }else if(elemento.style.display == "block") {
        elemento.style.setProperty('display', 'none');
    }
}
