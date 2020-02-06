const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
        mode: 'production',

        entry: {
            app: [__dirname + '/index.tsx']
        },

        output: {
            filename: 'playground.js',
            path: __dirname + '/public',
            publicPath: '/',
        },

        devtool: 'source-map',

        performance: {
            hints: false,
        },

        devServer: {
            host: '0.0.0.0',
            contentBase: path.resolve(__dirname + '/public'),
            hot: true,
            inline: true,
            historyApiFallback: true,
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    oneOf: [
                        {
                            test: /\.tsx?$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        '@babel/preset-env',
                                        '@babel/preset-typescript',
                                        '@babel/preset-react',
                                        '@emotion/babel-preset-css-prop'
                                    ],
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-proposal-object-rest-spread',
                                        '@babel/plugin-transform-runtime',
                                        ['@babel/plugin-transform-typescript', 
                                            { allowNamespaces: true }
                                        ],
                                        ['@babel/plugin-proposal-optional-chaining', {
                                            loose: true
                                        }]
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [{
                        loader: 'file-loader'
                    }]
                }
            ]
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
}