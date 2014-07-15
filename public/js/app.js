;(function($) {
  $('#footer-logo').click(function() {
          $("html, body").animate({scrollTop: 0}, 600);
          return false;
  });
}(jQuery));

;(function() {
  new WOW().init();
}());