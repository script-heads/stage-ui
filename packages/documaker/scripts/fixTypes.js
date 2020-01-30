const fs = require('fs')

function fixTypes(package, replaces = []) {
    console.log(`Fixing ${package} types...`)
    try {
        const dstType = `${__dirname}/../definitions/${package}.d.ts`

        if (replaces.length > 0) {
            let content = fs.readFileSync(dstType, { encoding: 'utf-8'})
            for (const replace of replaces) {
                content = content.replace(new RegExp(replace[0], 'g'), replace[1])
            }
            fs.writeFileSync(dstType, content)
        }
    } catch (error) {
        // console.error(error);
    }
}
fixTypes('whale', [
    ["declare module 'types'", "declare module '@flow-ui/whale/types'"],
])
fixTypes('core', [
    ['data/Table/types', '@flow-ui/core/data/Table/types'],
    ['layout/Modal/types', '@flow-ui/core/layout/Modal/types'],
    ["declare module 'icons'", "declare module '@flow-ui/core/icons'"],
])
fixTypes('lab', [
    ['@flow-ui/core', ''],
    ["declare module 'icons'", "declare module '@flow-ui/core/icons'"],
])
