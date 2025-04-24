
let song = document.querySelector("#sfx");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");

playBtn.addEventListener("click", function () {
    song.play();
    song.volume = .5;
})
pauseBtn.addEventListener("click", function () {
    song.pause();
})

