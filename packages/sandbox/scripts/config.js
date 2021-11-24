const path = require('path')

const HOST = '0.0.0.0'
const PORT = 9055
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public')
const SRC_DIR = path.resolve(__dirname, '..', 'src')
const DIST_DIR = path.resolve(__dirname, '..', 'dist')

const DEFINE = {
  ENV: JSON.stringify(
    Object.keys(process.env)
      .map((key) => (/DRONE_/.exec(key) ? [key, process.env[key]] : null))
      .filter((env) => !!env),
  ),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  CLIENT_PORT: JSON.stringify(process.env.CLIENT_PORT || PORT),
  MODE: JSON.stringify(process.env.MODE || 'development'),
}

exports.HOST = HOST
exports.PORT = PORT
exports.PUBLIC_DIR = PUBLIC_DIR
exports.SRC_DIR = SRC_DIR
exports.DIST_DIR = DIST_DIR
exports.DEFINE = DEFINE
