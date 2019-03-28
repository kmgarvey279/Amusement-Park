$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));

  if (height > 80) {
    $("#nolimit").show();
  } else if (height < 50) {
    $("#smallrides").show();
  } else {
    $("#rides").show();

  }
});
