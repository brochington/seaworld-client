var webpack = require('webpack');

module.exports = {
    entry: "./src/main.jsx",
	output: {
        path: __dirname + "/static",
		filename: 'bundle.js'
	},
	module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
    // plugins: [
    // 	new webpack.optimize.UglifyJsPlugin({
    // 		sourceMap: true,
    // 		mangle: true
    // 	})
    // ]
};