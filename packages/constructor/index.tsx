import ComponentTree from '@flow-ui/constructor/src/ComponentTree/index'
import PreferencePanel from '@flow-ui/constructor/src/PreferencePanel'
import Render from '@flow-ui/constructor/src/Render'
import { StructureItem, ConstructorContext } from '@flow-ui/constructor/types'
import { Split } from '@flow-ui/lab'
import styles from './styles'
import { useState } from 'react'
import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'

let captured: StructureItem | null = null
let focused: StructureItem | null = null
let target: StructureItem | null = null

function filter(id: string, section: StructureItem[]) {
    return section.filter(element => {
        if (element.$id === id) {
            return false
        }
        if (element.$children) {
            element.$children = filter(id, element.$children)
        }
        return true
    })
}

function findDelete(id: string, section: StructureItem[]) {
    let result: StructureItem | null = null
    
    section.forEach((element, index) => {
        if (element.$id === id) {
            result = element
            section = section.slice(index, 1)
            return
        }
        if (element.$children) {
            result = findDelete(id, element.$children)?.element || null
            if (result) return
        }
    })

    if (!result) return null

    return {
        element: result,
        structure: section
    }
}

function put(placedElement: StructureItem, id: string, section: StructureItem[]) {
    return section.map(element => {
        if (element.$id === id) {
            element.$children = element.$children?.concat([placedElement]) || [placedElement]
            return
        }
        if (element.$children) {
            put(placedElement, id, element.$children)
        }
        return true
    })
}

export default () => {
    const defaultStructure = require('./$DEMO').default

    const [structure, setStructure] = useState<StructureItem[]>(defaultStructure)

    // function create(componentName: string) {
    //     setStructure(sctructure => sctructure.concat([{
    //         $id: uuidv4(),
    //         $: componentName,
    //     }]))
    // }

    // function move(currentId: string, targetId: string) {
    //     let result = findDelete(currentId, structure)
    //     if (result) {
    //         put(result.element,targetId, result.structure)
    //     } 
    // }

    // function remove(id: string) {
    //     setStructure(structure => filter(id,structure))
    // }

    function create() {
        return
    }
    function duplicate() {
        return
    }
    function move() {
        return
    }
    function update() {
        return
    }
    function remove() {
        return
    }
    function undo() {
        return
    }
    function redo() {
        return
    }

    const context: ConstructorContext = {
        structure,
        captured,
        focused,
        target,
        create,
        duplicate,
        move,
        update,
        remove,
        undo,
        redo
    }

    return (
        <Split css={styles.container} direction="row" areaSize={4} positions={[25, 50, 25]}>
            <ComponentTree context={context} />
            <Render context={context} />
            <PreferencePanel context={context} />
        </Split>
    )
}