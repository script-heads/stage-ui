/**
 * This script will generate
 * tsx files in @flow-ui/core/icons/svg
 */

const fs = require('fs')
const path = require('path')
const icons = require('./iconsData')

const template = fs.readFileSync(
    path.resolve(__dirname, 'iconsTemplate.txt'),
    {
        encoding: 'utf-8'
    }
)

for (let key of Object.keys(icons.filled)) {
    fs.writeFileSync(
        path.resolve(__dirname, '..', 'icons', 'svg', key + '.tsx'),
        template
            .replace('#FILLED#', icons.filled[key] || '<span children="?" />')
            .replace('#OUTLINE#', icons.outline[key] || '<span children="?" />'),
        {
            encoding: 'utf-8'
        }
    )
}
