$("#ride-next").click(function(e) {
  e.preventDefault();
  $("#1").addClass("show-out-left");
  $("#2").addClass("show-in");
  $("#2").removeClass("show-out-right");
});
