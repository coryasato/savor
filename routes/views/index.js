var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var locals = res.locals,
		view = new keystone.View(req, res);
	
	// Set locals
	locals.section = 'home';
	locals.data = {};
	locals.caption = {};

	// Get Carousel Gallery
	//view.query('carouselImages', keystone.list('Carousel').model.find().sort('sortOrder'));
	
	view.on('init', function(next) {
		keystone.list('Carousel').model.find().exec(function(err, results) {
			if(err) throw next(err);

			locals.data = results[0].images;

			locals.caption = results[0].caption;

			locals.blurb = results[0].homepageBlurb;
			
			next();
		});
	});

	// Get Thumbnail Locals
    view.on('init', function(next) {

      var q = keystone.list('Product').model.find({}, 
                           {"thumbnail": 1, "thumbnailCaption": 1, "createdAt": 1, "slug":1, "thumbnailType": 1}).sort({createdAt: -1});

      q.limit(6);

      q.exec(function(err, result) {
        if(err) throw err;

        locals.thumbnails = result;

        next(err);
      });
    });

	
	
	// Render the view
	view.render('index');
	
};
