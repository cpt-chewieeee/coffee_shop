var App = {};
App.Server = require('./app/server')();;
App.config = require('./config/index');


var Routes = require('./route/index')(App.config);
for(var select in Routes){
	for(var route in Routes[select]){
		App.Server.addApiCall(select, route, Routes[select][route]);
	}
}
App.Server.preSets(App.config.secret, App.config.public_files);
App.Server.start(App.config.port, App.config.public);

