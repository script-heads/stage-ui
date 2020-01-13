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
    create: (componentName: string) => void
    move: (currentId: string, targetId: string) => void
    remove: (id: string) => void
    setCurrent: (structure: ConstructorStructure | null) => void
    setTarget: (structure: ConstructorStructure | null) => void
    setFocused: (structure: ConstructorStructure | null) => void
}