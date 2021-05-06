/**
 * This script will generate
 * tsx files in @stage-ui/core/icons/svg
 */

const fs = require('fs')
const path = require('path')

const svgSourcePath = path.resolve(__dirname, '..', 'svg')
const svgIndexPath = path.resolve(__dirname, '..', 'index.tsx')
const svgDstPath = path.resolve(__dirname, '..', 'lib')

const template = fs.readFileSync(
    path.resolve(__dirname, 'template.txt'),
    { encoding: 'utf-8' }
)

const svgFiles = fs.readdirSync(svgDstPath)
const svgFill = fs.readdirSync(svgSourcePath + '/Fill')
const svgOutline = fs.readdirSync(svgSourcePath + '/Outline')

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

const packageJson = require(
    path.resolve(__dirname, '..', 'package.json')
)

let iconsIndexData = `/**
version: ${packageJson.version}
*/\n`

for (const file of svgFiles) {
    fs.unlinkSync(path.join(svgDstPath, file))
}

const groupSvgContent = (fileName, svgString) => {
    return `<g>${svgString.toString()
        .replace(/<svg[^>]*>/, '')
        .replace(/<\/svg[^>]*>/, '')
        .replace(/ fill="[^"]*"/g, '')
        .replace(/ stroke="[^"]*"/g, '')
        .replace(/id="/g, `id="${fileName}`)
        .replace(/#/g, `#${fileName}`)}</g>`
}

for (let icon of svgFill) {
    let fileName = toCamelCase(icon.replace('.svg',''))
    let filled = groupSvgContent(fileName, fs.readFileSync(svgSourcePath + '/Fill/' + icon))
    let outline = filled
    if (svgOutline.includes(icon)) {
        outline = groupSvgContent(fileName + '-o', fs.readFileSync(svgSourcePath + '/Outline/' + icon))
    }

    /**
     * Write svg/*.tsx
     */
    fs.writeFileSync(
        path.resolve(svgDstPath, fileName + '.tsx'),
        template.replace('#FILLED#', filled.replace(/\n/g, '')).replace('#OUTLINE#', outline.replace(/\n/g, '')),
        { encoding: 'utf-8' }
    )
    
    iconsIndexData += `export { default as ${fileName} } from './lib/${fileName}'\n`
} 

/**
 * Write index.tsx
 */
fs.writeFileSync(svgIndexPath, iconsIndexData, { encoding: 'utf-8' })
