$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable-text").click(function() {
      $(".text-hidden").toggle();
      $(".text-showing").toggle();
  });
});
