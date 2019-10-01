#!/usr/bin/env node
const makeConfig = require("../webpack.config.ts");
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

const config = makeConfig(process.cwd());

const options = {
    port: 9050,
    host: '0.0.0.0',
    hot: true,
    contentBase: __dirname + "/../public",
    compress: true,
    public: 'flowui.abr.tech'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(9050, '0.0.0.0', () => {
    console.log('The Showcase running on port 9050 from ' + process.cwd());
});