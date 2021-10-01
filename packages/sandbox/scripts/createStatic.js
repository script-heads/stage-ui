const path = require('path')
const { execSync } = require('child_process')
const { platform } = require('os')
const { PUBLIC_DIR, SRC_DIR, DIST_DIR } = require('./config')

const WIN_PLATFORM = 'win32'

exports.createStatic = async () => {
  if (platform() === WIN_PLATFORM) {
    execSync(`rimraf -rf ${DIST_DIR}`)
    execSync(`mkdirp ${DIST_DIR}`)
    execSync(
      `ncp ${path.resolve(PUBLIC_DIR, 'index.html')} ${path.resolve(DIST_DIR, 'index.html')}`,
    )
  } else {
    execSync(`rm -rf ${DIST_DIR}`)
    execSync(`mkdir ${DIST_DIR}`)
    execSync(
      `cp -R ${path.resolve(PUBLIC_DIR, 'index.html')} ${path.resolve(DIST_DIR, 'index.html')}`,
    )
  }

  console.log('💿\x1b[32m Static files created!')
}
