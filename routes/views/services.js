var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // Get Service Page Locals
  view.on('init', function(next) {
    
    var q = keystone.list('ServicePage').model.findOne({});

    q.exec(function(err, result) {
      if(err) throw err;

      locals.data = result;

      next(err);
    });

  });

  // Get Services
  view.on('init', function(next) {

    var q = keystone.list('Service').model.find();

    q.exec(function(err, result) {
      if(err) throw err;

      locals.services = result;

      next(err);
    });
  });


  view.render('services');
};