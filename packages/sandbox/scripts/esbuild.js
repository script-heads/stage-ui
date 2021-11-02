const fs = require('fs')
const path = require('path')
const esbuild = require('esbuild')
const { serve } = require('./serve')
const { createStatic } = require('./createStatic')
const { SRC_DIR, DIST_DIR, DEFINE } = require('./config')

createStatic()

/**
 * Patch issue with
 */
const filePatchPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'node_modules',
  'element-resize-event',
  'index.js',
)

fs.writeFileSync(
  filePatchPath,
  fs
    .readFileSync(filePatchPath, { encoding: 'utf-8' })
    .replace('var exports = function exports', 'function exports'),
  { encoding: 'utf-8' },
)

/**
 * end of patch
 */

serve().then((onRebuild) => {
  // var exports = function exports
  esbuild.build({
    entryPoints: [path.resolve(SRC_DIR, 'index.tsx')],
    outdir: DIST_DIR,
    minify: false,
    jsxFactory: 'jsx',
    loader: {
      '.svg': 'dataurl',
      '.png': 'dataurl',
      '.jpg': 'dataurl',
    },
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    resolveExtensions: ['.ts', '.js', '.tsx', '.jsx', '.json', '.svg'],
    external: ['fs', 'crypto'],
    bundle: true,
    sourcemap: true,
    watch: { onRebuild },
    define: {
      global: 'window',
      local: JSON.stringify('development'),
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.platform': JSON.stringify(process.platform),
      ...DEFINE,
    },
    inject: [`${__dirname}/wsClientInjection.js`, __dirname + '/react-shim.js'],
  })
})
