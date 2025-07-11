/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * This script will generate
 * tsx files in @stage-ui/icons/svg
 */

const fs = require('fs')
const path = require('path')

const svgSourcePath = path.resolve(__dirname, '..', 'svg')
const svgIndexPath = path.resolve(__dirname, '..', 'index.ts')
const svgLibPath = path.resolve(__dirname, '..', 'lib')

const template = fs.readFileSync(path.resolve(__dirname, 'template.txt'), {
  encoding: 'utf-8',
})

const svgOutline = fs.readdirSync(`${svgSourcePath}/Outline`)
const svgFill = fs.readdirSync(`${svgSourcePath}/Fill`)
const svgTsx = fs.readdirSync(svgLibPath)

const toCamelCase = (name) => {
  const match = name.match('-')
  if (match && match.index >= 0) {
    const idx = match.index + 1
    return toCamelCase(
      name.slice(0, idx - 1) + name[idx].toUpperCase() + name.slice(idx + 1, 0xff),
    )
  }
  return name.slice(0, 1).toUpperCase() + name.slice(1, 0xff)
}

const packageJson = require(path.resolve(__dirname, '..', 'package.json'))

let iconsIndexData = `/**
version: ${packageJson.version}
*/\n`

const groupSvgContent = (svgString) => {
  return svgString
    .toString()
    .replace(/<svg[^>]*>/, '')
    .replace(/<g[^>]*>/, '')
    .replace(/<\/g[^>]*>/, '')
    .replace(/<\/svg[^>]*>/, '')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/ fill="[^"]*"/g, '')
    .replace(/ stroke="[^"]*"/g, '')
    .replace(/id="\S+"/g, ``)
    .replace('  ', ' ')
}

for (const file of svgTsx) {
  fs.unlinkSync(path.join(svgLibPath, file))
}

for (const icon of svgFill) {
  if (icon === '.DS_Store') {
    continue
  }
  const fileName = toCamelCase(icon.replace('.svg', ''))
  const filled = groupSvgContent(fs.readFileSync(`${svgSourcePath}/Fill/${icon}`))
  let outline = filled
  if (svgOutline.includes(icon)) {
    outline = groupSvgContent(fs.readFileSync(`${svgSourcePath}/Outline/${icon}`))
  }

  /**
   * Write svg/*.tsx
   */
  fs.writeFileSync(
    path.resolve(svgLibPath, `${fileName}.tsx`),
    template
      .replace('#FILLED#', filled.replace(/\n/g, ''))
      .replace('#OUTLINE#', outline.replace(/\n/g, '')),
    { encoding: 'utf-8' },
  )

  iconsIndexData += `export { default as ${fileName} } from './lib/${fileName}'\n`
}

/**
 * Write index.tsx
 */
fs.writeFileSync(svgIndexPath, iconsIndexData, { encoding: 'utf-8' })
