var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Get About Page Locals
  view.on('init', function(next) {
    var q = keystone.list('AboutPage').model.findOne({});

    q.exec(function(err, result) {
      if(err) throw err;

      locals.data = result;

      next(err);
    });
  });

  // Get Clients
  view.on('init', function(next) {
    var q = keystone.list('Clients').model.find().sort({name: 1});

    q.exec(function(err, result) {
      if(err) throw err;

      locals.clientNames = result;

      next(err);
    });
  });
  // Get Staff
  view.on('init', function(next) {
    var q = keystone.list('Staff').model.find().sort({name:1});

    q.exec(function(err, result) {
      if(err) throw err;

      locals.staffMembers = result;

      next(err);
    });
  });
  

  view.render('about');
};