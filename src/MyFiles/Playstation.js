import { event } from "jquery";
function add_whiteList(id_station, event) {
  let pause_icon_button = document.getElementById("pause_icon_button"),
    button_play = document.querySelectorAll("[name=button_play]"),
    play_icon_button = document.getElementById("play_icon_button"),
    myAudio = document.getElementById("myAudio"),
    alert_before_playing = document.getElementById("alert_before_playing");

  button_play.forEach((element) => {
    element.style.pointerEvents = "all";
  });
  pause_icon_button.style.display = "block";
  play_icon_button.style.display = "none";
  play_icon_button.style.pointerEvents = "all";

  this.state.radios.map((radios) => {
    let button_play_clicked = document.getElementById(radios.id);
    if (event.target.id == radios.id) {
      button_play_clicked.classList.add("button_play_clicked");
      document.getElementById("titel_player").innerHTML =
        "تستمع إلى : " + radios.name;
      if (button_play_clicked.classList.contains("button_play_clicked")) {
        button_play_clicked.style.pointerEvents = "none";
      }
      fetch(radios.url).then(
        (response) => {
          if (response.status == "200") {
            myAudio.setAttribute("src", radios.url);
            myAudio.setAttribute("autoplay", "true");
            alert_before_playing.innerHTML = "مشغل";
          }
        },
        (error) => {
          alert_before_playing.innerHTML = "يوجد مشكله بالمحطة برجاء تغييرها";
        }
      );
    } else {
      button_play_clicked.classList.remove("button_play_clicked");
    }
  });
}

export default add_whiteList;
