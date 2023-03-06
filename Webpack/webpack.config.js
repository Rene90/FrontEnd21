const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const CssMinimizerPugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {


	module:{
		rules:[
		//PARA MANEJAR HTML
		{
		  test: /\.html$/i,
		  loader:'html-loader'
		},
		//PARA MANEJAR CSS
		{
		  test:/\.css$/i,
 		  use: [MiniCssExtractPlugin.loader, "css-loader"];

		},
		//PARA MANEJAR JAVASCRIPT
		{
		  test: /\.js$/,
		  exclude:/node_modules/,
		  use: {
			loader:"babel-loader",
			options: {
				presets:["@babel/preset-env"]	
				}

			}
		}
	 ]

	},
	plugins:[
		//Para crear un html que ya cargue nuestro javascript a partir de nuestro codigo
		new HtmlWebpackPlugin({
		template:"./src/index.html",
		filename:"./index.html"


		}),
		//para extraer el css de nuestro codigo javasript en un archivo aparte
		new MiniCssExtractPlugin({
		filename:"[name].css",
		chunkFilename:"[id].css"

		})



		],
		//para minimizar el css
		optimization:{
		minimizer:[
			new CssMinimizerPlugin(),//remueve comentarios y minifica css final
 			new TerserPlugin(),//reduce y minifica los comentarios de mi javascript

		],
		},





};
