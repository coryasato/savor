;(function($) {
  var navbarHeight = $('#header').height();
  var totalHeight = $(window).height();
  $("#body").height(totalHeight - navbarHeight);

  // For dynamic resizing
  $(window).resize(function() {
    var navbarHeight = $('#header').height();
    var totalHeight = $(window).height();
    $("#body").height(totalHeight - navbarHeight);
  });


  $('#savorCarousel').carousel({pause: false});

  $('.carousel-active-image').eq(0).addClass('active');

  $('.carousel-bullet').eq(0).addClass('active');
}(jQuery));
