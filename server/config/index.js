module.exports = {
	port: 8080,
	secret: 'hello_world',
	public: '/../../public/',
	public_files: function(){
		var fs = require('fs');
		var recursion  = function(dir, file_, full){
			files_ = files_ || [];
			full = full || '';
			var files = fs.readdirSync(dir);

			for(var i in files){
				var name = dir + '/' + files[i];
				if(fs.statSync(name).isDirectory()){
					recursion(name, files_, fule + '/' + files[i]);
				} else {
					files_.push(full + '/' + files[i]);
				}
			}
			return files_;
		}
		return recursion(__dirname + '/../public/');
	}
}