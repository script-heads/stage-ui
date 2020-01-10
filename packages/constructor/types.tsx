import { CSSObject } from '@emotion/core'

export type ConstructorStructure = {
    $: string
    $id: string
    $name?: string
    $css?: CSSObject
    $children?: ConstructorStructure[]
    $empty?: boolean
    [key: string]: any
}

export type StructureContext = {
    structure: ConstructorStructure[]
    focused: ConstructorStructure | null
    current: ConstructorStructure | null
    target: ConstructorStructure | null
}