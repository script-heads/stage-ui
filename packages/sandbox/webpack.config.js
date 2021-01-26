const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebPack = require('copy-webpack-plugin')
const ProjectDIR = path.resolve(__dirname) + '/'
const SourceDIR = ProjectDIR
const BuildDIR = ProjectDIR + '../../build/playground/' + 'app'
const Mode = process.env.ENV === 'production' ? 'production' : 'development'

const config = {

    mode: Mode,

    entry: {
        app: SourceDIR  + 'index.tsx'
    },

    externals: {},

    output: {
        path: path.resolve(BuildDIR),
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
                                    '@emotion/babel-preset-css-prop',
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
                                    }],
                                    ...require('@stage-ui/core/babelImportPlugins')
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

    target: 'web',
    context: __dirname,
    stats: 'errors-only',
}

const plugins = [
    //moment optimizations
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),

    new webpack.DefinePlugin({
        'ENV_MODE': JSON.stringify(Mode),
    }),
]

/**
 * Копируем файлы
 */
plugins.push(new CopyWebPack({
    patterns: [
        { from: ProjectDIR + 'public/index.html' },
    ]
}))

/**
 * Настройки для дебага
 */
if (process.env.DEBUG === 'true') {
    config.devtool = 'source-map'
    config.devServer = {
        host: '0.0.0.0',
        contentBase: path.resolve(BuildDIR, process.env.ENV),
        hot: true,
        inline: true,
        historyApiFallback: true,
    }
    plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
    config.devtool = false
}

if (!config.optimization) {
    config.optimization = {}
}

config.optimization.moduleIds = 'named'

/**
 * Настройки для аналитики
 */
if (process.env.ANALYZE === 'true') {
    config.optimization = {
        concatenateModules: false
    }
    plugins.push(new BundleAnalyzerPlugin())
}

config.plugins = plugins

module.exports = config