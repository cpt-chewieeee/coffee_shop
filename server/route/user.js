module.exports = function(config){
	return {
		login: function(req, res){
			var user = {
				username: 'test',
				first: 'Bart',
				last: 'Simpson',
				id: 1
			}
			res.json({
				success: true,
				message: 'Success',
				user: user
			});
		}
	}
}