/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');
const ASSETS_PATH = path.join(__dirname, '../assets');

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'highworth-tkd.[name].bundle.js',
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	performance: {
		maxEntrypointSize: 350000,
		maxAssetSize: 300000,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Highworth Tae Kwon-Do',
			favicon: './public/favicon.ico',
			showErrors: false,
			template: './public/index.ejs',
			meta: {
				viewport: 'width=device-width, initial-scale=1.0',
				description:
					'Highworth Tae Kwon-Do Club is a family friendly martial arts club teaching traditional Tae Kwon-Do in the Swindon area.',
				keywords:
					'highworth swindon taekwondo taekwon-do tae kwon do self-defense deedigan martial arts ITF martialarts korea fitness sports sport family traditional UKITF anti-bullying skill team-building protection confidence',
				robots: 'index,follow',
			},
		}),
	],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.jpg', '.png'],
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				include: [SRC_PATH],
				exclude: [/\.stories\.ts(x?)$/, /\.story\.ts(x?)$/, /\.test\.ts(x?)$/],
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.(s?)css$/,
				include: [SRC_PATH],
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				include: [SRC_PATH, ASSETS_PATH],
				use: [
					{
						loader: 'url-loader',
					},
				],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
};
