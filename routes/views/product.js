var keystone = require('keystone'),
    async = require('async'),
    _ = require('underscore');

exports = module.exports = function(req, res) {

  var locals = res.locals,
    view = new keystone.View(req, res);

    locals.filters = {
      product: req.params.product
    };

  
    // Get Product Locals
    view.on('init', function(next) {

      var q = keystone.list('Product').model.findOne({
        slug: locals.filters.product
      });
      
      q.exec(function(err, result) {
        if(err) throw err;

        locals.heroImage = result.heroImage.url;
        locals.blurb = result.blurb;
        locals.overview = result.overview;
        locals.specsTitle = result.specsTitle;
        locals.specs = result.specs;
        locals.gallery = result.gallery;
        next(err);
      });

    });

    // Get Thumbnail Locals
    view.on('init', function(next) {

      var q = keystone.list('Product').model.find({}, 
                           {"thumbnail": 1, "thumbnailCaption": 1, "createdAt": 1, "slug":1, "thumbnailType": 1}).sort({createdAt: -1});

      q.limit(3);

      q.exec(function(err, result) {
        if(err) throw err;

        locals.thumbnails = result;

        next(err);
      });
    });


    view.render('product');
};