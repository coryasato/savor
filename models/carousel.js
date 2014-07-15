var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Carousel = new keystone.List('Carousel', {
  autokey: { from: 'name', path: 'key' },
  label: 'Home Page'
});

Carousel.add({
  name: { type: String, required: true },
  images: { type: Types.CloudinaryImages },
  caption: { type: Types.Html, wysiwyg: true, height: 150 },
  homepageBlurb: { type: Types.Html, wysiwyg: true, height: 150 }
});

Carousel.register();