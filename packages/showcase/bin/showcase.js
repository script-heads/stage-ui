#!/usr/bin/env node
const makeConfig = require("../webpack.config.ts");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

const config = makeConfig(process.cwd());

const options = {
    port: 9050,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true,
    contentBase: __dirname + "/../public",
    compress: process.env.HOST ? true : false,
    public: process.env.HOST || undefined,

}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(9050, '0.0.0.0', () => {
    console.log('The Showcase running on port 9050 from ' + process.cwd());
});