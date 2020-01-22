
export type ArchitectPage = {
    id: string
    name: string
    items: ArchitectItem[]
}

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
    components: Record<string, {
        component: any
        create: () => ArchitectItem
    }>
    getItems: () => ArchitectItem[]
    captured?: ArchitectItem | null
    focused?: ArchitectItem | null
    target?: ArchitectItem | null 
    targetIndex?: number
    
    move: () => void
    update: () => void
    remove: () => void
    duplicate:() => void
    undo: () => void
    redo: () => void

    componentLibraryShow: () => void
    componentLibraryHide: () => void
}