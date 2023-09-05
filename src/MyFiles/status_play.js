import { event } from "jquery";
function status_play(event) {
  let myAudio = document.getElementById("myAudio"),
    play_icon_button = document.getElementById("play_icon_button"),
    pause_icon_button = document.getElementById("pause_icon_button"),
    alert_before_playing = document.getElementById("alert_before_playing");
  if (myAudio.paused) {
    myAudio.play();
    play_icon_button.style.display = "none";
    pause_icon_button.style.display = "block";
    alert_before_playing.innerHTML = "مشغل";
  } else {
    myAudio.pause();
    play_icon_button.style.display = "block";
    pause_icon_button.style.display = "none";
    alert_before_playing.innerHTML = "متوقف";
  }
}
export default status_play;
