const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const package = require('../package.json');

fs.open('./build/env.js', 'w', function(err, fd) {
	const buf = 'export default "development";';
	fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
	devtool: '#source-map',
	output: {
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	module: {
		rules: [{
			test: /\.ejs$/,
			loader: 'html-loader'
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vender-exten', 'vender-base'],
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			title: 'iView admin v' + package.version,
			filename: '../index.html',
			template: './src/template/index.ejs',
			inject: false
		}),
		new CopyWebpackPlugin([{
				from: 'src/views/components/theme-switch/theme'
			}
		], {
			ignore: [
				'text-editor.vue'
			]
		})
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		stats: {
			colors: true
		},
		proxy: {
			//匹配代理的url
			'/management-api': {
				// 目标服务器地址
				target: 'http://172.16.100.210:8081',
				//路径重写
				pathRewrite: {
				},
				changeOrigin: true
			}
		}
	}
});