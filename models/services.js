var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Service = new keystone.List('Service', {
  map: { name: 'title' }
});

Service.add({
  title: { type: String, required: true },
  serviceImage: { type: Types.CloudinaryImage, width: Number, height: Number },
  serviceText: { type: Types.Html, wysiwyg: true, height: 150 }
});

Service.defaultColumns = 'title';

Service.register();