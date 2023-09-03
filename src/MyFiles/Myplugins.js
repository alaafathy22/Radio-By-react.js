import $ from "jquery";

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  $("#loading_body").hide("slow", function () {
    $("#loading_body").remove();
  });
}
