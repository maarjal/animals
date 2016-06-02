$(document).ready(function() {
  var animal = prompt("Do you like snake, turtle or insect?");

  if (animal === "snake") {
    $("#snake").show();
  } else if (animal === "turtle") {
    $("#turtle").show();
  } else {
    $("#insect").show();
  }

});
