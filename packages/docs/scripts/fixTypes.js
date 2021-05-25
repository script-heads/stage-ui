const fs = require('fs')

function fixTypes(package, replaces = []) {
    console.log(`Fixing ${package} types...`)
    try {
        const dstType = `${__dirname}/../public/definitions/${package}.types`

        if (replaces.length > 0) {
            let content = fs.readFileSync(dstType, {
                encoding: 'utf-8'
            })
            for (const replace of replaces) {
                content = content.replace(new RegExp(replace[0], 'g'), replace[1])
            }
            fs.writeFileSync(dstType, content)
        }
    } catch (error) {
        // console.error(error);
    }
}
fixTypes('system', [
    ["declare module 'types'", "declare module '@stage-ui/system/types'"],
])
fixTypes('core', [
    ['data/Table/types', '@stage-ui/core/data/Table/types'],
    ['layout/Modal/types', '@stage-ui/core/layout/Modal/types'],
    ['misc/hocs/Icon/types', '@stage-ui/core/misc/hocs/Icon/types'],
    ['misc/hocs/Field/types', '@stage-ui/core/misc/hocs/Field/types'],
    ['misc/hocs/Check/types', '@stage-ui/core/misc/hocs/Check/types'],
    ['misc/hocs/Typography/types', '@stage-ui/core/misc/hocs/Typography/types'],
    ["declare module 'icons'", "declare module '@stage-ui/icons'"],
])
fixTypes('lab', [
    ['@stage-ui/core', ''],
    ["declare module 'icons'", "declare module '@stage-ui/icons'"],
])
fixTypes('icons', [
    ['@stage-ui/core', ''],
    ["declare module 'icons'", "declare module '@stage-ui/icons'"],
])

fixTypes('color', [
    ["type ColorParam", "declare module 'color' {\n\ntype ColorParam"],
    ["export = Color;", "export = Color;\n\n}"],
])