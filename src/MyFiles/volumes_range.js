import { event } from "jquery";
function volumes_range(event) {
  document.getElementById("myAudio").volume = event.target.value / 100;
}
export default volumes_range;
