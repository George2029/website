const {join, resolve} = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

	entry: resolve('./src/index.tsx'),
	output: {
		path: resolve('./dist'),
		filename: 'bundle.js',
		clean: true,
	},
	devtool: 'source-map',
	devServer: {
		port: '5000',
	    static: {
      		directory: resolve('./dist'),
    	},
		compress: true,
  	},
  	plugins: [
    	new HtmlWebpackPlugin({
			template: join(resolve('./src'), 'index.html'),
			favicon: join(resolve('./src/img'), 'favicon.ico')
    	}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
  	],
	optimization: {
   		minimize: true,
   	 	minimizer: [new TerserPlugin()],
  	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: resolve('./src'),
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				],
			},
			{
				test: /\.tsx$/i,
				use: 'ts-loader',
				exclude: /node_modules/,
				resolve: {
  					extensions: ['.tsx', '.ts', '.jsx', '.js'],
  				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
      		{
        		test: /\.(woff|woff2|eot|ttf|otf)$/i,
        		type: 'asset/resource',
      		}
		]
	},
}
