$(document).ready(function () {
  $(".quacky").click(function () {
    var audio = $("#quack")[0];
    if (audio.paused) {
      audio.play();
      $(this).attr("id", "true");
    } else {
      audio.pause();
      $(this).attr("id", "false");
    }
  });
});
