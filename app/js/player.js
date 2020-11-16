"use strict";

let playing_song_button;
let main;
let playing_song_container;

async function openPlayingSong() {
    playing_song_container.style.transform = 'translateY(0)';
    playing_song_container.style.visibility = 'visible';
    await new Promise(r => setTimeout(r, 400));
    main.style.display = 'none';
}


function initPlayer() {
    
    let width = window.innerWidth;
    main = document.querySelector('.main');
    
    if (width < 768){
        playing_song_container = document.querySelector("#playing-song-container");
        playing_song_button = document.querySelector("#open-playing-song");
        playing_song_button.addEventListener("click",openPlayingSong);
    }

}

document.addEventListener("DOMContentLoaded", initPlayer);