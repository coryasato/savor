;(function($) {
  // Active Navbar
  $('.nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');


  //  Scroll to top.
  $('#footer-logo').click(function() {
          $("html, body").animate({scrollTop: 0}, 600);
          return false;
  });
}(jQuery));

;(function() {
  new WOW().init();
}());