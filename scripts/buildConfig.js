let packageName = process.argv[2]

if (!packageName) {
    console.error("What's package, dude? Give me it into options")
    process.exit(-1)
}

const fs = require('fs')
const buildDir = __dirname + '/../build/'
const workspacesDir = __dirname + '/../packages/'
let config, systemConfig, coreConfig
packageName = packageName.toLocaleLowerCase()
config = JSON.parse(fs.readFileSync(buildDir + packageName + '/package.json'))
systemConfig = JSON.parse(fs.readFileSync(workspacesDir + 'system/package.json'))

switch (packageName) {
    case 'core':
        config.dependencies[systemConfig.name] = `^${systemConfig.version}`
        break;
    case 'icons':
        config.dependencies[systemConfig.name] = `^${systemConfig.version}`
        break;
    case 'lab':
        coreConfig = JSON.parse(fs.readFileSync(workspacesDir + 'core/package.json'))
        config.dependencies[coreConfig.name] = `^${coreConfig.version}`
        config.dependencies[systemConfig.name] = `^${systemConfig.version}`
        break;
}

delete config.scripts

fs.writeFileSync(buildDir + packageName + '/package.json', JSON.stringify(config, null, 2))