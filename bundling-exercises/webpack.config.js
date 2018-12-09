var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var path = require('path');
var basePath = __dirname;

module.exports = {
	context: path.join(basePath, 'src'),
	resolve: {
		extensions: ['.js', '.ts']
	},
	entry: {
		app: './ts/index.ts',
		appStyles: [
			'./scss/main.scss',
		],
	},
	output: {
		filename: 'js/[name].[chunkhash].js',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					name: 'vendor',
					test: 'vendor',
					enforce: true
				},
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader',
				options: {
					useBabel: true,
					"babelCore": "@babel/core", // needed for Babel v7
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
		],
	},
	plugins: [
		//Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: 'index.html', //Name of file in ./dist/
			template: 'index.html', //Name of template in ./src
			hash: true,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css"
		}),
	],
};
