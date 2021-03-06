var express = require('express');
var path = require('path');
var app = express();
var bodyParse = require('body-parser');
var morgan = require('morgan');
module.exports = function(){
	var ApiRoute = express.Router();
	var _ = require('underscore');
	return {
		start: function(port, staticPath){
			app.use(express.static(path.join(__dirname + staticPath)));
			app.get('/', function(req, res){
				console.log('--->', staticPath);
				res.sendFile(path.join(__dirname + staticPath + 'index.html'))
			})
			app.listen(port, function(){
				console.log('server.js: server starting on ' + port);
			});
			app.use('/api', ApiRoute);
		},
	
		preSets: function(secret, getPath){
			app.use(morgan('dev'));
			app.use(bodyParse.urlencoded({extended: true}));
			app.use(bodyParse.json());
		},
		addRoute: function(type, route, fn){
			switch(type){
				case 'POST' || 'post' :
					app.post(route, fn);
				case 'GET' || 'get' :
				default:
					app.get(route, fn);
			}
		},
		addApiCall: function(type, route, fn){
			switch(type){
				case 'post':
					ApiRoute.post(route, fn);
					break;
				case 'get' :
				default:
					ApiRoute.get(route, fn);
					break;
			}
		}
	}
}