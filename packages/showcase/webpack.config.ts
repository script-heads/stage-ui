var path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function (dir) {

    const config = {
        mode: 'development',
        entry: {
            app: [__dirname + "/src/index.tsx"]
        },
        output: {
            filename: "showcase.js",
            path: __dirname + "/public",
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    oneOf: [
                        {
                            test: /\.raw\.tsx?$/,
                            use: 'raw-loader',
                        },
                        {
                            test: /\.tsx?$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        "@babel/preset-env",
                                        "@babel/preset-typescript",
                                        "@babel/preset-react",
                                        "@emotion/babel-preset-css-prop"
                                    ],
                                    plugins: [
                                        "@babel/proposal-class-properties",
                                        "@babel/proposal-object-rest-spread",
                                        "@babel/plugin-transform-runtime"
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        "css-loader"
                    ]
                },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                '$_WORKDIR_$': JSON.stringify(dir)
            }),
            new MonacoWebpackPlugin()
            // new BundleAnalyzerPlugin()
        ]
    }
    return config;
}