#!/usr/bin/env node
const makeConfig = require('esm')(module)("../webpack.config.ts");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

const config = makeConfig(process.cwd());

const options = {
    port: 9050,
    host: '0.0.0.0',
    disableHostCheck: true,
    clientLogLevel: 'error',
    hot: process.env.ENV !== 'production',
    historyApiFallback: true,
    contentBase: [__dirname + "/../public",  __dirname + "/../../"],
    stats: 'errors-warnings'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(9050, '0.0.0.0');