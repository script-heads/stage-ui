const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const CopyWebPack = require('copy-webpack-plugin')
const ProjectDIR = path.resolve(__dirname) + '/'
const SourceDIR = ProjectDIR
const BuildDIR = ProjectDIR + '../../build/documaker/'
const MODE = process.env.ENV === 'production' ? 'production' : 'development'

module.exports = function (workdir = path.resolve(__dirname + '/../docs')) {

    const config = {

        mode: MODE,
    
        entry: {
            app: SourceDIR  + 'index.tsx'
        },
    
        externals: {},
    
        output: {
            filename: 'documaker.js',
            path: path.resolve(BuildDIR),
            publicPath: '/',
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
    
        module: {
            rules: [
                {
                    test: /\.raw?$/,
                    use: 'raw-loader',
                },
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
                                        '@babel/preset-env',
                                        '@babel/preset-typescript',
                                        '@babel/preset-react',
                                        '@emotion/babel-preset-css-prop'
                                    ],
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-proposal-object-rest-spread',
                                        '@babel/plugin-transform-runtime',
                                        ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
                                        ['@babel/plugin-proposal-optional-chaining', {
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
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [{
                        loader: 'file-loader'
                    }]
                }
            ]
        },
    
        target: 'web',
        context: __dirname,
        stats: 'errors-only',
    }
    
    const plugins = [
        //moment optimizations
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new MonacoWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'WEBPACK_WORKDIR': JSON.stringify(workdir),
            'ENV_MODE': JSON.stringify(MODE),
        }),
    ]
    
    /**
     * Копируем файлы
     */
    plugins.push(new CopyWebPack([
        { from: ProjectDIR + 'public/index.html' },
        /**
         * definitions for monaco TSLint
         */
        { from: ProjectDIR + 'definitions', to: BuildDIR + '/definitions' },
    ]))
    
    /**
     * Настройки для дебага
     */
    if (process.env.DEBUG === 'true') {
        config['devtool'] = 'source-map'
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new FilterWarningsPlugin({ 
            exclude: /source-map-loader|Critical dependency: the request of a dependency is an expression/ 
        }))
    } else {
        config['devtool'] = false
    }
    
    /**
     * Настройки для аналитики
     */
    if (process.env.ANALYZE === 'true') {
        config['optimization'] = {
            concatenateModules: false
        }
        plugins.push(new BundleAnalyzerPlugin())
    }
    
    config['plugins'] = plugins

    return config
}