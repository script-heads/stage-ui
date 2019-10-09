const fs = require('fs')
const generator = require('dts-generator').default

function copyTypes(path, package, declareModule) {
    try {
        console.log(`Copy ${package} types...`)
        const srcType = `${__dirname}/../../../${path}`
        const dstType = `${__dirname}/../generated/${package}.d.ts`
        fs.copyFileSync(srcType, dstType)
        if (declareModule) {
            console.log(`Declaring module for ${package} types...`)
            let content = fs.readFileSync(dstType, { encoding: 'utf-8'})
            content = `declare module '${package}' {\n${content}\n}`;
            fs.writeFileSync(dstType, content)
        }
    } catch (error) {
        console.error(error);
    }
}

function generateTypes(package) {
    console.log(`Generating ${package} types...`)
    try {
        generator({
            project: `${__dirname}/../../${package}`,
            out: `${__dirname}/../generated/${package}.d.ts`,
            exclude: [],
            resolveModuleId: (params) => {
                if (params.currentModuleId === 'index') {
                    return `@flow-ui/${package}`
                }
                if (params.currentModuleId.match('/index')) {
                    return params.currentModuleId.replace('/index', '')
                }
            }
        })
    } catch (error) {
        // console.error(error);
    }
}

generateTypes('core')
generateTypes('lab')
copyTypes('node_modules/@types/react/global.d.ts', 'global')
copyTypes('node_modules/@types/react/index.d.ts', 'react', true)
copyTypes('node_modules/csstype/index.d.ts', 'csstype', true)