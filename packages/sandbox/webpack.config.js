const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const CopyWebPack = require('copy-webpack-plugin')

const ProjectDIR = `${path.resolve(__dirname)}/`
const SourceDIR = ProjectDIR
const BuildDIR = `${ProjectDIR}../../build/playground/` + `app`
const Mode = process.env.ENV === 'production' ? 'production' : 'development'

const config = {
  mode: Mode,

  entry: {
    app: `${SourceDIR}index.tsx`,
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
            test: /\.raw\.tsx?$/,
            use: {
              loader: 'esbuild-loader',
              options: {
                loader: 'text',
              },
            },
          },
          {
            test: /\.(ts|tsx)$/,
            use: {
              loader: 'esbuild-loader',
              options: {
                loader: 'tsx',
                jsxFactory: 'jsx',
                target: 'es2015',
              },
            },
            exclude: (modulePath) =>
              /node_modules/.test(modulePath) &&
              !/node_modules[\\/](ismart-(templates|api))[\\/].+/.test(modulePath),
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'dataurl',
            },
          },
        ],
      },
    ],
  },

  target: 'web',
  context: __dirname,
  stats: 'errors-only',
}

const plugins = [
  new webpack.ProvidePlugin({
    jsx: ['@emotion/react', 'jsx'],
  }),
  // moment optimizations
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),

  new webpack.DefinePlugin({
    ENV_MODE: JSON.stringify(Mode),
  }),
]

/**
 * Копируем файлы
 */
plugins.push(
  new CopyWebPack({
    patterns: [{ from: `${ProjectDIR}public/index.html` }],
  }),
)

/**
 * Настройки для девелопмент
 */
if (process.env.ENV === 'development') {
  config.devtool = 'source-map'
  config.devServer = {
    port: 9055,
    host: '0.0.0.0',
    disableHostCheck: true,
    clientLogLevel: 'error',
    hot: true,
    historyApiFallback: true,
    contentBase: [`${BuildDIR}/public`, `${__dirname}/../`],
    stats: 'errors-warnings',
  }
  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(
    new FilterWarningsPlugin({
      exclude:
        /source-map-loader|Critical dependency: the request of a dependency is an expression/,
    }),
  )
} else {
  config.devtool = false
}

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
    concatenateModules: false,
  }
  plugins.push(new BundleAnalyzerPlugin())
}

config.plugins = plugins

module.exports = config
