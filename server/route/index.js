var Router = function(config){
	var User = require('./user')(config);
	var Product = require('./product')();
	return {
		post: {
			'/login': User['login'],
			
		},
		get: {
			'/get_all_products': Product['get_products']
		}
	}
};
module.exports = function(config){
	return new Router(config);
};