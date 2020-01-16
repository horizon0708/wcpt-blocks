var ZipPlugin = require("zip-webpack-plugin")

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'build/index.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
  },
  plugins: [
    new ZipPlugin({

    })
  ]
};