const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
			},
		],
	},
	devServer: {
		publicPath: "/",
		contentBase: "public",
		hot: true,
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		publicPath: "public",
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
};
