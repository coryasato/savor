;(function($) {
  
  // Change navbar-brand to white & hover color
  var brand = $('.navbar-brand');

  brand.css('color', 'rgba(255,250,240, 0.7)');

  brand.mouseenter(function() {
    $(this).css('color', '#CD5555');
  }).mouseleave(function() {
    $(this).css('color', 'rgba(255,250,240, 0.7)');
  });
  // Change navbar list to white & hover color
  var myNavbarColor = $('.navbar-nav > li > a');

  myNavbarColor.css('color', 'rgba(255,250,240, 0.7)');

  myNavbarColor.mouseenter(function() {
    $(this).css('color', '#CD5555');
  }).mouseleave(function() {
    $(this).css('color', 'rgba(255,250,240, 0.7)');
  });
  
}(jQuery));