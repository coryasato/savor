var keystone = require('keystone'),
    Types = keystone.Field.Types;

var AboutPage = new keystone.List('AboutPage', {
  map: { name: 'title' },
  label: 'About Page'
});

AboutPage.add({
  title: { type: String, required: true },
  heroImage: { type: Types.CloudinaryImage },
  heading: { type: Types.Html, wysiwyg: true, height: 150 },  
  overview : { type: Types.Html, wysiwyg: true, height: 300 },
  blurb: { type: Types.Html, wysiwyg: true, height: 150 }
});

AboutPage.register();