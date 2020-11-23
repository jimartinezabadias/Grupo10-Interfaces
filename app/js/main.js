let favboton = document.getElementById("fav-btn");
let elemento = document.getElementById("elemento-agregado");
let cora = document.getElementById("corazon-player");

favboton.onclick = function() {
    elemento.classList.add("elemento-agregado");
    elemento.style.display = "flex";
    cora.setAttribute("fill", "#EB5757");
    cora.setAttribute("stroke", "#EB5757");
};

function agregarFavorito() {
    elemento.classList.add("elemento-agregado");
    elemento.style.display = "flex";
    document.getElementById("titulo-elemento").innerHTML = document.getElementById("titulo").innerHTML;
    document.getElementById("cora-playlist").setAttribute("fill", "#EB5757");
    document.getElementById("cora-playlist").setAttribute("stroke", "#EB5757");
}

function agregarFavoritoLista(numero) {
    elemento.classList.add("elemento-agregado");
    elemento.style.display = "flex";

    for(let i = 0; i <= 8; i++) {
        if(i == numero) {
            document.getElementById(numero).setAttribute("fill", "#EB5757");
            document.getElementById(numero).setAttribute("stroke", "#EB5757");
        }
    }
}

function mostrarCompartir() {
    let opciones = document.getElementById("opciones-compartir");
    
    if(opciones.style.display == "none") {
        opciones.style.setProperty('display', 'block');
    }else if(opciones.style.display == "block") {
        opciones.style.setProperty('display', 'none');
    }
}

// Navbar
let goBackButton = document.getElementById("nav-back-btn");

goBackButton.addEventListener("click", goBack);

function goBack() {
    window.history.back();
}

let botonplayer = document.getElementById("play-button");
botonplayer.addEventListener("click", function() {
    play();
});

let plays = document.querySelectorAll('#play-playlist');

for(let i = 0; i < plays.length; i++) {
    plays[i].addEventListener("click", function() {
        play();
    });
}

let segundos;
let tiempo = document.querySelectorAll('#current-time');

function play() {
    botonplayer.innerHTML = '<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M16.5556 14.3333V27.6667V14.3333ZM25.4444 14.3333V27.6667V14.3333ZM41 21C41 23.6264 40.4827 26.2272 39.4776 28.6537C38.4725 31.0802 36.9993 33.285 35.1421 35.1421C33.285 36.9993 31.0802 38.4725 28.6537 39.4776C26.2272 40.4827 23.6264 41 21 41C18.3736 41 15.7728 40.4827 13.3463 39.4776C10.9198 38.4725 8.71504 36.9993 6.85786 35.1421C5.00069 33.285 3.5275 31.0802 2.52241 28.6537C1.51732 26.2272 1 23.6264 1 21C1 15.6957 3.10714 10.6086 6.85786 6.85786C10.6086 3.10714 15.6957 1 21 1C26.3043 1 31.3914 3.10714 35.1421 6.85786C38.8929 10.6086 41 15.6957 41 21Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' + '</svg>';
    segundos = 0;
    setInterval(function(){ cambiarTiempo(segundos); }, 1000);
}

function cambiarTiempo(valor) {
    if(valor <= 59) {
        if(valor < 10) {
            tiempo[0].innerHTML = "00:0" + valor;
            tiempo[1].innerHTML = "00:0" + valor;
            document.getElementById("song-range").value = valor;
        }else if (valor >= 10) {
            tiempo[0].innerHTML = "00:" + valor;
            tiempo[1].innerHTML = "00:" + valor;
            document.getElementById("song-range").value = valor;
        }
    
        segundos++;
    }else if(valor > 59) {
        return;
    }
}