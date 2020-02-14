let packageName = process.argv[2]

if (!packageName) {
    console.error("What's package, dude? Give me it into options")
    process.exit(-1)
}

const fs = require('fs')
const buildDir = __dirname + '/../build/'
const workspacesDir = __dirname + '/../packages/'
let config, whaleConfig, coreConfig
packageName = packageName.toLocaleLowerCase()

config = JSON.parse(fs.readFileSync(buildDir + packageName + '/package.json'))

switch (packageName) {
    case 'core':
        whaleConfig = JSON.parse(fs.readFileSync(workspacesDir + 'whale/package.json'))
        config.dependencies[whaleConfig.name] = `^${whaleConfig.version}`
        break;
    case 'lab':
        whaleConfig = JSON.parse(fs.readFileSync(workspacesDir + 'whale/package.json'))
        coreConfig = JSON.parse(fs.readFileSync(workspacesDir + 'core/package.json'))
        config.dependencies[coreConfig.name] = `^${coreConfig.version}`
        config.dependencies[whaleConfig.name] = `^${whaleConfig.version}`
        break;
}

delete config.scripts

fs.writeFileSync(buildDir + packageName + '/package.json', JSON.stringify(config, null, 2))