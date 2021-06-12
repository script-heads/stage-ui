import Root from './Root'

export { default as Module } from './Module'
export { default as Property } from './Property'
export { default as Alias } from './Alias'
export { default as Interface } from './Interface'

export type OFlags = {
  isExported?: boolean
  isExternal?: boolean
  isOptional?: boolean
}
export type OType =
  | OTypeIndexedAccess
  | OTypeArray
  | OTypeUnion
  | OTypeIntersection
  | OTypeStringLiteral
  | OTypeIntrinsic
  | OTypeReference
  | OTypeReflection

export type OTypeUnion = {
  type: 'union'
  types: OType[]
}
export type OTypeIntersection = {
  type: 'intersection'
  types: OType[]
}
export type OTypeIntrinsic = {
  type: 'intrinsic'
  name:
    | 'undefined'
    | 'true'
    | 'false'
    | 'boolean'
    | 'number'
    | 'string'
    | 'any'
    | 'unknown'
    | 'void'
}
export type OTypeStringLiteral = {
  type: 'stringLiteral'
  value: string
}
export type OTypeReference = {
  type: 'reference'
  id?: number
  getReference?: () => OChild | null
  name: string
}
export type OTypeArray = {
  type: 'array'
  elementType: OType
}
export type OTypeReflection = {
  type: 'reflection'
  declaration: OChild
}
export type OTypeIndexedAccess = {
  type: 'indexedAccess'
  objectType: {
    type: 'reference'
    name: string
  }
  indexType: {
    type: 'stringLiteral'
    value: 'disabled'
  }
}
export type OGroup = {
  title: string
  kind: number
  children: number[]
}
export type OChild = {
  id: number
  name: string
  kind: number
  kindString?: string
  comment?:
    | string
    | {
        shortText?: string
        tags?: {
          tag: string
          text: string
        }[]
      }
  tags: Record<string, string>
  flags: OFlags
  type: OType
  groups?: OGroup[]
  children: OChild[]
  extendedTypes?: OChild[]
  inheritedFrom?: OChild
  signatures?: {
    id: number
    name: '__call'
    kind: 0x1000
    kindString: 'Call signature'
    flags: {}
    parameters?: {
      id: number
      name: string
      kind: 0x8000
      kindString: 'Parameter'
      flags: {}
      type: OType
    }
    type: OType
  }[]
}

export default Root.getInstance()
