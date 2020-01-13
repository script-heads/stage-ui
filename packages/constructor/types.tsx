import { CSSObject } from '@emotion/core'

export type StructureItem = {
    $: string
    $id: string
    $name?: string
    $css?: CSSObject
    $children?: StructureItem[]
    $empty?: boolean
    [key: string]: any
}

export type ConstructorContext = {
    structure: StructureItem[]

    captured: StructureItem | null
    focused: StructureItem | null
    target: StructureItem | null

    create: (item: StructureItem) => void
    duplicate: () => void
    move: () => void
    update: () => void
    remove: () => void

    undo: () => void
    redo: () => void
}