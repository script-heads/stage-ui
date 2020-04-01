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
export type OType = OTypeUnion
    | OTypeStringLiteral
    | OTypeIntrinsic
    | OTypeReference
    | OTypeReflection
    | OTypeAlias
    | OTypeIndexedAccess
    | OTypeArray

export type OTypeUnion = {
    type: 'union'
    types: OType[]
}
export type OTypeIntrinsic = {
    type: 'intrinsic'
    name: 'undefined' | 'true' | 'false' | 'boolean' | 'number' | 'string' | 'any' | 'unknown' | 'void'
}
export type OTypeStringLiteral = {
    type: 'stringLiteral'
    value: string
}
export type OTypeReference = {
    type: 'reference'
    id?: number
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
export type OTypeAlias = {
    id: number
    name: string
    type: OType
    kind: 0x400000
    kindString: 'Type alias'
    flags: OFlags
    typeParameter: OTypeParameter[]
}
export type OTypeParameter = {
    id: number
    name: string
    type: OType
    kind: 0x200000
    kindString: 'Type parameter'
    flags: OFlags
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
    comment?: string | { 
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
}

export default Root.getInstance()