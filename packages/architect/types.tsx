import { CSSObject } from '@emotion/core'

export type ArchitectItem = {
    id: string
    component: string
    name?: string
    text?: string
    parent?: ArchitectItem | null
    children?: ArchitectItem[]
    props: Record<string,any>
    $: Record<string,any>
}

export interface ArchitectTools {
    components: Record<string, any>
    getItems: () => ArchitectItem[]
    captured?: ArchitectItem | null
    focused?: ArchitectItem | null
    target?: ArchitectItem | null 

    move: () => void
    update: () => void
    remove: () => void
    undo: () => void
    redo: () => void

    componentLibraryShow: () => void
    componentLibraryHide: () => void
}