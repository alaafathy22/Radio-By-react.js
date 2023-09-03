import { event } from "jquery";
function status_play(event){
  if (document.getElementById("myAudio").paused) {
    document.getElementById("myAudio").play();
    document.getElementById("play_icon_button").style.display = "none";
    document.getElementById("pause_icon_button").style.display = "block";
    document.getElementById("alert_before_playing").innerHTML = "مشغل";
  } else {
    document.getElementById("myAudio").pause();
    document.getElementById("pause_icon_button").style.display = "none";
    document.getElementById("play_icon_button").style.display = "block";
    document.getElementById("alert_before_playing").innerHTML = "متوقف";
  }
};
export default status_play;
