const fs = require('fs')
const generator = require('dts-generator').default

function copyTypes(path, package, declareModule) {
    try {
        console.log(`Copy ${package} types...`)
        const srcType = `${__dirname}/../../../${path}`
        const dstType = `${__dirname}/../definitions/${package}.d.ts`
        fs.copyFileSync(srcType, dstType)
        if (declareModule) {
            console.log(`Declaring module for ${package} types...`)
            let content = fs.readFileSync(dstType, { encoding: 'utf-8' })
            content = `declare module '${package}' {\n${content}\n}`;
            fs.writeFileSync(dstType, content)
        }
    } catch (error) {
        console.error(error);
    }
}

function generateTypes(package, replaces = []) {
    console.log(`Generating ${package} types...`)
    try {
        const srcType = `${__dirname}/../../${package}`
        const dstType = `${__dirname}/../definitions/${package}.d.ts`

        const onComplete = () => {
            if (replaces.length > 0) {
                let content = fs.readFileSync(dstType, { encoding: 'utf-8'})
                for (const replace of replaces) {
                    content = content.replace(new RegExp(replace[0], 'g'), replace[1])
                }
                fs.writeFileSync(dstType, content)
            }
        }

        let running;

        generator({
            project: srcType,
            out: dstType,
            exclude: [],
            resolveModuleId: (params) => {
                if (running) {
                    clearTimeout(running);
                }
                running = setTimeout(onComplete, 5000)

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

generateTypes('core', [
    ['@flow-ui/core/types', 'types'],
    ['layout/Modal/types', '@flow-ui/core/layout/Modal/types'],
    ['FunctionalProp<IconsetTypes.Index, React.ReactElement>', 'FunctionalProp<IconsetTypes.Index, string>']
])

generateTypes('lab', [
    ['@flow-ui/core', ''],
])

copyTypes('node_modules/@types/react/global.d.ts', 'global')
copyTypes('node_modules/@types/react/index.d.ts', 'react', true)
copyTypes('node_modules/csstype/index.d.ts', 'csstype', true)