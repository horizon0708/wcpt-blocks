const webpack = require("webpack")

module.exports = {
	entry: {
    "bundle": './src/index.js',
    "bundle.min": "./src/index.js"
  },
	output: {
		path: __dirname,
    filename: "build/[name].js",
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
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};