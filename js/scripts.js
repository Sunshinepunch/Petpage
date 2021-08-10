$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $( "#clickme" ).click(function() {
    $( "#walrus" ).slideUp( "slow", "linear", function() {
      // Animation complete.
    });
  });
});