// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv')().load();

// Require keystone
var keystone = require('keystone'),
		pkg      = require('./package.json');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	
	'name': 'Savor Brands',
	'brand': 'Savor Brands',
	
	'less': 'public',
	'static': 'public',
	//'favicon': 'public/favicon.ico',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'emails': 'templates/emails',
	
	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://localhost/' + pkg.name,
	
	'session': true,
	'session store': 'mongo',

	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'savor',

	'madrill api key': process.env.MADRILL_KEY,

	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN
	
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/footer-logo.png',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://107.170.250.98/images/' : 'http://localhost/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://107.170.250.98/keystone/' : 'http://localhost/keystone/'
}]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'services': 'services',
	// 'posts': ['posts', 'post-categories'],
	'products': 'products',
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
