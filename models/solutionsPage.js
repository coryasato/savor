var keystone = require('keystone'),
    Types = keystone.Field.Types;

var SolutionsPage = new keystone.List('SolutionsPage', {
  map: { name: 'title' },
  label: 'Solutions Page'
});

SolutionsPage.add({
  title: { type: String, required: true },
  blurb: { type: Types.Html, wysiwyg: true, height: 150 }
});

SolutionsPage.register();