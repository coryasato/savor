var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Staff = new keystone.List('Staff', {
  map: { name: 'name' },
  label: 'Staff'
});

Staff.add({
  name: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  position: { type: Types.Text },
  phone: { type: Types.Text },
  email: { type: Types.Text }
});

Staff.register();