$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("white-text");
  });
  $("button#og").click(function(){
    $("body").removeClass();
    $("body").addClass("og-background");
  });
});