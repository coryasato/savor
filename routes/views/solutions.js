var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Set locals
  locals.section = 'solutions';

  // Get Thumbnail Locals
  view.on('init', function(next) {

    var q = keystone.list('Product').model.find({}, 
                           {"thumbnail": 1, "thumbnailCaption": 1, "createdAt": 1, "slug":1, "thumbnailType": 1}).sort({createdAt: -1});

    q.exec(function(err, result) {
      if(err) throw err;

      locals.thumbnails = result;

      next(err);
    });
  });

  view.on('init', function(next) {
  var q = keystone.list('SolutionsPage').model.findOne({});

  q.exec(function(err, result) {
    if (err) throw err;
    
    locals.blurb = result.blurb;

    next(err);
  });

  });

  view.render('solutions');
};