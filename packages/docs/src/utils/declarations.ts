/* eslint-disable no-restricted-globals */
import { JSONOutput } from 'typedoc'

import { get as getTypedoc, Property } from './typedoc'

export type DeclarationsCache = {
  typedoc: Record<string, Property[]> | null
  typedocJSON: string | null
  react: string | null
  csstype: string | null
  color: string | null
  '@stage-ui/core': string | null
  '@stage-ui/icons': string | null
  '@stage-ui/system': string | null
}

const cache: DeclarationsCache = {
  typedocJSON: null,
  typedoc: null,
  react: null,
  csstype: null,
  color: null,
  '@stage-ui/core': null,
  '@stage-ui/icons': null,
  '@stage-ui/system': null,
}

function addMonacoModule(module: string, name: string, filename: string) {
  const declaration = module.includes('@stage-ui')
    ? module.replace(`declare module "index"`, `declare module "${name}"`)
    : module
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    declaration,
    `file:///node_modules/${name}/${filename}`,
  )
}

async function fetchDeclaration(
  name: Exclude<keyof DeclarationsCache, 'typedoc'>,
  filename: string,
  moduleFilename: string | null = 'index.d.ts',
) {
  if (!cache[name]) {
    cache[name] = await (await fetch(`${location.origin}/types/${filename}`)).text()
    if (moduleFilename) {
      addMonacoModule(cache[name] as string, name, moduleFilename)
    }
  }
  return cache[name]
}

async function get() {
  await fetchDeclaration('react', 'react.d.ts')
  await fetchDeclaration('react', 'react-global.d.ts', 'global.d.ts')
  await fetchDeclaration('csstype', 'csstype.d.ts')
  await fetchDeclaration('color', 'color.d.ts')
  await fetchDeclaration('@stage-ui/core', 'core.d.ts')
  await fetchDeclaration('@stage-ui/icons', 'icons.d.ts')
  await fetchDeclaration('@stage-ui/system', 'system.d.ts')
  await fetchDeclaration('typedocJSON', 'typedoc.json', null)
  if (!cache.typedoc && cache.typedocJSON) {
    cache.typedoc = getTypedoc(
      JSON.parse(cache.typedocJSON) as JSONOutput.DeclarationReflection,
    )
  }
  return cache.typedoc
}

export default get
