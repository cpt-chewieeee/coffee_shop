module.exports = {
	entry: [
		'./index.js'
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, include: 'style-loader!css-loader'}
		]
	},
	output: {
		filename: 'bundle.js',
		path: '../public/js'
	}
}