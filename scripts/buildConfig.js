const fs = require('fs')

const buildDir = __dirname + '/../build/'
const workspacesDir = __dirname + '/../packages/'
const packageName = (process.argv[2] || '').toLocaleLowerCase()

if (!packageName) {
    console.error("What's package, dude? Give me it into options")
    process.exit(-1)
}

let current = JSON.parse(fs.readFileSync(buildDir + packageName + '/package.json'))

const pkg = {
    system: JSON.parse(fs.readFileSync(workspacesDir + 'system/package.json')),
    icons: JSON.parse(fs.readFileSync(workspacesDir + 'icons/package.json')),
    core: JSON.parse(fs.readFileSync(workspacesDir + 'core/package.json')),
    lab: JSON.parse(fs.readFileSync(workspacesDir + 'lab/package.json')),
}

switch (packageName) {
    case 'lab':
        current.dependencies[pkg.system.name] = `${pkg.system.version}`
        break;
    case 'icons':
        current.dependencies[pkg.system.name] = `${pkg.system.version}`
        break;
    case 'core':
        current.dependencies[pkg.system.name] = `${pkg.system.version}`
        break;
}

delete current.scripts

fs.writeFileSync(buildDir + packageName + '/package.json', JSON.stringify(current, null, 2))