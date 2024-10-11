var MyAudio = document.getElementById("MyAudio");
var icon = document.getElementById("img");

icon.onclick = function () {
  if (MyAudio.paused) {
    MyAudio.play();
    icon.src = "icon and desing/Sound webpage_img/pause.png";
  } else {
    MyAudio.pause();
    icon.src = "icon and desing/Sound webpage_img/play.png";
  }
};
