const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)

module.exports = function (workdir) {
    return {
        mode: 'development',

        entry: {
            app: [__dirname + '/index.tsx']
        },

        output: {
            filename: 'documaker.js',
            path: __dirname + '/public',
            publicPath: '/',
        },

        devtool: 'source-map',

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            plugins: [
                PnpWebpackPlugin,
            ],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    oneOf: [
                        {
                            test: /\.raw\.tsx?$/,
                            use: require.resolve('raw-loader'),
                        },
                        {
                            test: /\.tsx?$/,
                            use: {
                                loader: require.resolve('babel-loader'),
                                options: {
                                    presets: [
                                        require.resolve('@babel/preset-env'),
                                        require.resolve('@babel/preset-typescript'),
                                        require.resolve('@babel/preset-react'),
                                        require.resolve('@emotion/babel-preset-css-prop')
                                    ],
                                    plugins: [
                                        require.resolve('@babel/plugin-proposal-class-properties'),
                                        require.resolve('@babel/plugin-proposal-object-rest-spread'),
                                        require.resolve('@babel/plugin-transform-runtime'),
                                        [require.resolve('@babel/plugin-transform-typescript'), { allowNamespaces: true }],
                                        [require.resolve('@babel/plugin-proposal-optional-chaining'), {
                                            loose: true
                                        }],
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [require.resolve('style-loader'), require.resolve('css-loader')]
                },
                {
                    test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [{
                        loader: require.resolve('file-loader')
                    }]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'WEBPACK_WORKDIR': JSON.stringify(workdir)
            }),
            new MonacoWebpackPlugin(),
            new FilterWarningsPlugin({ 
                exclude: /source-map-loader|Critical dependency: the request of a dependency is an expression/ 
            })
        ]
    }
}