import { event } from "jquery";
function add_whiteList(id_station, event) {
  document.getElementById("pause_icon_button").style.display = "block";
  document.getElementById("play_icon_button").style.display = "none";
  document.getElementById("play_icon_button").style.pointerEvents = "all";
  this.state.radios.map((radios) => {
    if (event.target.id == radios.id) {
      document
        .getElementById(event.target.id)
        .classList.add("button_play_clicked");
      document.getElementById("titel_player").innerHTML =
        "تستمع إلى : " + radios.name;
    } else {
      document
        .getElementById(radios.id)
        .classList.remove("button_play_clicked");
    }
    if (radios.id == id_station) {
      fetch(radios.url).then(
        (response) => {
          if (response.status == "200") {
            document.getElementById("myAudio").setAttribute("src", radios.url);
            document.getElementById("myAudio").setAttribute("autoplay", "true");
            document.getElementById("alert_before_playing").innerHTML = "مشغل";
          }
        },
        (error) => {
          document.getElementById("alert_before_playing").innerHTML =
            "يوجد مشكله بالمحطة برجاء تغييرها";
          document.getElementById("myAudio").pause();
        }
      );
    }
  });
}

export default add_whiteList;
