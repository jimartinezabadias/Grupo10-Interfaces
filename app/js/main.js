let favboton = document.getElementById("fav-btn");
let elemento = document.getElementById("elemento-agregado");
let cora = document.getElementById("corazon-player");
favboton.onclick = function() {
    elemento.classList.add("elemento-agregado");
    elemento.style.display = "flex";
    cora.setAttribute("fill", "#EB5757");
    cora.setAttribute("stroke", "#EB5757");
};

function goBack() {
    window.history.back();
}