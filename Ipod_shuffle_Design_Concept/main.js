

$(document).ready(function() {
  $('.fa-play').click(function() {
    $music.play();
  });
  $('.fa-pause').click(function() {
    $music.pause();
  });
});

$(document).ready(function() {
  $('.colors').click(function() {
    var colors = $(this).attr('id');
    
    $('.ipod-body, .control-pad').attr('id', colors);
  });
});




