/**
 * This script will generate
 * tsx files in @flow-ui/core/icons/svg
 */

const fs = require('fs')
const path = require('path')

const evaIconsPath = path.resolve(__dirname, '..', '..', '..', 'node_modules', 'eva-icons')
const svgIndexPath = path.resolve(__dirname, '..', 'icons', 'index.tsx')
const svgDstPath = path.resolve(__dirname, '..', 'icons', 'svg')

const template = fs.readFileSync(
    path.resolve(__dirname, 'iconsTemplate.txt'),
    { encoding: 'utf-8' }
)

const packageJson = require(
    path.resolve(evaIconsPath, 'package.json')
)
const icons = require(
    path.resolve(evaIconsPath, 'eva-icons.json')
)

let iconsIndexData = `/**
version: ${packageJson.version}
*/\n`

const svgFiles = fs.readdirSync(svgDstPath)
for (const file of svgFiles) {
    fs.unlinkSync(path.join(svgDstPath, file),);
}

const toCamelCase = (name) => {
    const match = name.match('-')
    if (match && match.index >= 0) {
        const idx = match.index + 1
        return toCamelCase(
            name.slice(0, idx - 1) + name[idx].toUpperCase() + name.slice(idx + 1, 0xFF)
        )
    }
    return name.slice(0, 1).toUpperCase() + name.slice(1, 0xFF)
}

for (let key of Object.keys(icons)) {
    if (key.match('-outline')) {
        continue;
    }
    const filled = icons[key]
    const outline = icons[key + '-outline'] || '<span children="?" />'

    /**
     * Write svg/*.tsx
     */
    fs.writeFileSync(
        path.resolve(svgDstPath, key + '.tsx'),
        template.replace('#FILLED#', filled).replace('#OUTLINE#', outline),
        { encoding: 'utf-8' }
    )
    
    iconsIndexData += `export { default as ${toCamelCase(key)} } from './svg/${key}'\n`
} 

/**
 * Write index.tsx
 */
fs.writeFileSync(svgIndexPath, iconsIndexData, { encoding: 'utf-8' })
