var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ServicePage = new keystone.List('ServicePage', {
  map: { name: 'title' },
  label: 'Service Page'
});

ServicePage.add({
  title: { type: String, required: true },
  heroImage: { type: Types.CloudinaryImage },
  heading: { type: Types.Html, wysiwyg: true, height: 150 },  
  overview : { type: Types.Html, wysiwyg: true, height: 300 },
  blurb: { type: Types.Html, wysiwyg: true, height: 150 }
});

ServicePage.register();