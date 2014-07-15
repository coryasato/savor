var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ContactPage = new keystone.List('ContactPage', {
  map: { name: 'title' },
  label: 'Contact Page'
});

ContactPage.add({
  title: { type: String, required: true },
  heroImage: { type: Types.CloudinaryImage },
  heading: { type: Types.Html, wysiwyg: true, height: 150 },
  blurb: { type: Types.Html, wysiwyg: true, height: 150 }
});

ContactPage.register();