const MyAudio = document.getElementById("MyAudio");
const icon = document.getElementById("img");

icon.addEventListener("click", () => {
  if (MyAudio.paused) {
    MyAudio.play();
    icon.src = "icon and desing/Sound webpage_img/pause.png";
  } else {
    MyAudio.pause();
    icon.src = "icon and desing/Sound webpage_img/play.png";
  }
});