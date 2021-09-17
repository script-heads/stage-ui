if (!process.argv[2]) {
  console.error("Hmm... Seems like you don't tell me what package to make")
  process.exit(-1)
}

const fs = require('fs')
const readline = require("readline")
const buildDir = __dirname + '/../build/'
const packagesDir = __dirname + '/../packages/'
const thatPackageName = process.argv[2].toLocaleLowerCase()
const thatPackageDefinition = JSON.parse(fs.readFileSync(packagesDir + thatPackageName + '/package.json'))
const systemPackageDefinition = JSON.parse(fs.readFileSync(packagesDir + 'system/package.json'))
const corePackageDefinition = JSON.parse(fs.readFileSync(packagesDir + 'core/package.json'))
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const writeDependencies = (dependencies) => {
  if (!thatPackageDefinition.dependencies) {
    thatPackageDefinition.dependencies = {}
  }
  thatPackageDefinition.dependencies = {...thatPackageDefinition.dependencies, ...dependencies}
}
const getNextVersion = new Promise((resolve) => {
  rl.question(
    `Current version of ${thatPackageName} is ${thatPackageDefinition.version}. Whats next? (Hit Enter if same): `,
    (nextVersion) => resolve(nextVersion)
  )
})

getNextVersion.then((nextVersion) => {
  if (nextVersion && nextVersion != thatPackageDefinition.version) {
    thatPackageDefinition.version = nextVersion
    fs.writeFileSync(packagesDir + thatPackageName + '/package.json', JSON.stringify(thatPackageDefinition, null, 2))
  }

  if (thatPackageName === 'core') {
    writeDependencies({
      [systemPackageDefinition.name]: `^${systemPackageDefinition.version}`
    })
  }
  
  if (thatPackageName === 'icons') {
    writeDependencies({
      [systemPackageDefinition.name]: `^${systemPackageDefinition.version}`
    })
    
  }
  
  if (thatPackageName === 'lab') {
    writeDependencies({
      [corePackageDefinition.name]: `^${corePackageDefinition.version}`,
      [systemPackageDefinition.name]: `^${systemPackageDefinition.version}`
    })
  }
  
  delete thatPackageDefinition.scripts
  
  fs.mkdirSync(buildDir + thatPackageName, { recursive: true })
  fs.writeFileSync(buildDir + thatPackageName + '/package.json', JSON.stringify(thatPackageDefinition, null, 2))
  fs.copyFile(
    packagesDir + thatPackageName + '/README.md', 
    buildDir + thatPackageName + '/README.md', 
    () => { console.log(`✨ Done make ${thatPackageName}`) }
  )
  process.exit(0)
})