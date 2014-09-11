var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  defaultSort: '-createdAt'
});

Product.add({
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  heroImage: { type: Types.CloudinaryImage },
  thumbnail: { type: Types.CloudinaryImage, width: Number, height: Number },
  thumbnailCaption: { type: Types.Text },
  thumbnailType: { type: Types.Text },
  blurb: { type: Types.Html, wysiwyg: true, height: 150 },
  overviewTitle: { type: Types.Text },
  overview : { type: Types.Html, wysiwyg: true, height: 200 },
  approachTitle: { type: Types.Text },
  approach : { type: Types.Html, wysiwyg: true, height: 200 },
  solutionTitle: { type: Types.Text },
  solution : { type: Types.Html, wysiwyg: true, height: 200 },
  specsTitle: { type: Types.Text },
  specs: { type: Types.Html, wysiwyg: true, height: 150},
  gallery: { type: Types.CloudinaryImages }
});

Product.defaultColumns = 'title';

Product.register();