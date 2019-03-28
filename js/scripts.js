$().ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));

  if (height > 80) {
    $("#nolimit").addClass("highlight");
  } else if (height < 50) {
    $("#smallrides").addClass("highlight");
  } else {
    $("#rides").addClass("highlight")

  }
});
