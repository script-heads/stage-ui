/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONOutput } from 'typedoc'
import typedocRaw from '../generated/typedoc.json'

export type Property = {
  name: string
  type?: JSONOutput.SomeType
  isOptional: boolean
  value: string
  description?: string
}

const typedoc = typedocRaw as JSONOutput.DeclarationReflection
const stagePropNames = typedoc.children
  ?.find((declaration) => declaration.name === 'system/props/types')
  ?.children
  ?.find((i) => i.name === 'AllProps')
  ?.children
  ?.reduce<string[]>((pv, nv) => [...pv, nv.name], [])

function prettyType(declaration: JSONOutput.SomeType | undefined, bracklets = false): string {
  let value = '–'
  if (!declaration) return value

  switch (declaration.type) {
    case 'intrinsic':
      return declaration.name
    case 'literal':
      return typeof declaration.value === 'string'
        ? declaration.value
        : declaration.value?.toString() || ''
    case 'reference':
      return `${declaration.name}${
        declaration.typeArguments
          ? `<${declaration.typeArguments.map((argument) => prettyType(argument)).join(', ')}>`
          : ''
      }`
    case 'union':
      value = declaration.types
        .map((type) => prettyType(type, type.type === 'union' || type.type === 'intersection'))
        .join(' | ')
      return bracklets ? `(${value})` : value
    case 'intersection':
      value = declaration.types
        .map((type) => prettyType(type, type.type === 'union' || type.type === 'intersection'))
        .join(' & ')
      return bracklets ? `(${value})` : value
    case 'reflection':
      return declaration.declaration?.signatures
        ? declaration.declaration?.signatures
            .map((signature) => {
              if (signature.parameters) {
                return `(${signature.parameters
                  .map((parameter) => `${parameter.name}: ${prettyType(parameter.type)}`)
                  .join(', ')}) => ${prettyType(signature.type)}`
              }
              return prettyType(signature.type)
            })
            .join()
        : '{}'
    default:
      return value
  }
}

function prettyProperty(declaration: JSONOutput.DeclarationReflection): Property {
  return {
    name: declaration.name,
    isOptional: !!declaration.flags.isOptional,
    description: declaration.comment?.shortText,
    type: declaration.type,
    value: prettyType(declaration.type),
  }
}

function getComponentsDeclarations() {
  if (!typedoc || !typedoc.children) throw Error('Typedoc dont initilized')

  return typedoc.children.filter(
    (child) => child.name.includes('core') && child.name.includes('types'),
  )
}

function getComponentsProps(): Record<string, Property[]> {
  return getComponentsDeclarations().reduce((pv, nv) => {
    const name = nv.name.split('/')[2]
    const properties = nv.children?.[0].children?.find((child) => child.name === 'Props')?.children
    if (!properties) throw Error(`There is no props for component ${name}`)

    return Object.assign(pv, {
      [name]: properties
        .filter((property) => !stagePropNames?.includes(property.name))
        .map((property) => prettyProperty(property)),
    })
  }, {})
}

export function get() {
  return getComponentsProps()
}
