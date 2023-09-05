import { event } from "jquery";
function volumes_range(event) {
  let myAudio = document.getElementById("myAudio");
  myAudio.volume = event.target.value / 100;
}
export default volumes_range;
