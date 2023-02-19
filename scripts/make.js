const fs = require('fs')
const readline = require('readline')
const buildDir = __dirname + '/../build/'
const rootDir = __dirname + '/../'
const packagesDir = __dirname + '/../packages/'

const systemPackageDefinition = JSON.parse(fs.readFileSync(packagesDir + 'system/package.json'))
const corePackageDefinition = JSON.parse(fs.readFileSync(packagesDir + 'core/package.json'))
const iconPackageDefinition = JSON.parse(fs.readFileSync(packagesDir + 'icons/package.json'))
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const updateDependencies = (data, dependencies) => {
  if (!data.dependencies) {
    data.dependencies = {}
  }
  data.dependencies = { ...data.dependencies, ...dependencies }
}

const packagesToModify = process.argv[2] ? [process.argv[2].toLocaleLowerCase()] : ['system', 'core', 'icons']
const defaultPackageName = packagesToModify[1] || packagesToModify[0]
const isAll = packagesToModify.length > 1

const packageObjectData = JSON.parse(
  fs.readFileSync(packagesDir + defaultPackageName + '/package.json'),
)

const getNextVersion = new Promise((resolve) => {
  rl.question(
    `Current version of ${packagesToModify.length > 1 ? defaultPackageName : 'StageUI'} is ${packageObjectData.version}. Whats next? (Hit Enter if same): `,
    (nextVersion) => resolve(nextVersion),
  )
})

getNextVersion.then((nextVersion) => {
  for (const packageName of packagesToModify) {
    if (packageName === 'system') {
      const packageRootData = JSON.parse(
        fs.readFileSync(rootDir + '/package.json'),
      )
      if (nextVersion && nextVersion != packageRootData.version) {
        packageRootData.version = nextVersion
        fs.writeFileSync(
          rootDir + '/package.json',
          JSON.stringify(packageRootData, null, 2),
        )
      }
    }
    const packageObjectData = JSON.parse(
      fs.readFileSync(packagesDir + packageName + '/package.json'),
    )
    if (nextVersion && nextVersion != packageObjectData.version) {
      packageObjectData.version = nextVersion
      fs.writeFileSync(
        packagesDir + packageName + '/package.json',
        JSON.stringify(packageObjectData, null, 2),
      )
    }
  
    if (packageName === 'core') {
      updateDependencies(packageObjectData, {
        [systemPackageDefinition.name]: isAll ? nextVersion : systemPackageDefinition.version,
        [iconPackageDefinition.name]: isAll ? nextVersion : iconPackageDefinition.version,
      })
    }
  
    if (packageName === 'icons') {
      updateDependencies(packageObjectData, {
        [systemPackageDefinition.name]: isAll ? nextVersion : systemPackageDefinition.version,
      })
    }
  
    if (packageName === 'lab') {
      updateDependencies(packageObjectData, {
        [corePackageDefinition.name]: isAll ? nextVersion : corePackageDefinition.version,
        [systemPackageDefinition.name]: isAll ? nextVersion : systemPackageDefinition.version,
        [iconPackageDefinition.name]: isAll ? nextVersion : iconPackageDefinition.version,
      })
    }
  
    delete packageObjectData.scripts
  
    fs.mkdirSync(buildDir + packageName, { recursive: true })
    fs.writeFileSync(
      buildDir + packageName + '/package.json',
      JSON.stringify(packageObjectData, null, 2),
    )
    fs.copyFileSync(
      packagesDir + packageName + '/README.md',
      buildDir + packageName + '/README.md',
    )
    console.log(`✨ Version patched for package ${packageName}`)
  }
  process.exit(0)
})
