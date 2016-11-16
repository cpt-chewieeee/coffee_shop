var $ = require('jquery');
module.exports = {
	login: function(username, password, callback, toggleModal){
		$.ajax({
			url: "/api/login",
			dataType: 'json',
			type: 'POST',
			data: {
				username: username,
				password: password
			}, 
			success: function(data){
				callback(data, null, toggleModal);
			},
			error: function(error){
				callback(null, error);
			}
		})
	},
	getAll: function(callback){
		$.ajax({
			url: '/api/get_all_products',
			dataType: 'json',
			type: 'GET',
			success: function(data){
				callback(data, null);
			},
			error: function(error){
				callback(null, error);
			}
		});
	}
}