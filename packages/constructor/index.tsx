import ComponentTree from '@flow-ui/constructor/src/ComponentTree/index'
import PreferencePanel from '@flow-ui/constructor/src/PreferencePanel'
import Render from '@flow-ui/constructor/src/Render'
import { ConstructorStructure } from '@flow-ui/constructor/types'
import { Split } from '@flow-ui/lab'
import styles from './styles'
import { useState } from 'react'
import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'

function filter(id: string, section: ConstructorStructure[]) {
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

function findDelete(id: string, section: ConstructorStructure[]) {
    let result: ConstructorStructure | null = null
    
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

function put(placedElement: ConstructorStructure, id: string, section: ConstructorStructure[]) {
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

    const [structure, setStructure] = useState<ConstructorStructure[]>(defaultStructure)
    const [current, setCurrent] = useState<ConstructorStructure | null>(null)
    const [target, setTarget] = useState<ConstructorStructure | null>(null)
    const [focused, setFocused] = useState<ConstructorStructure | null>(null)

    function create(componentName: string) {
        setStructure(sctructure => sctructure.concat([{
            $id: uuidv4(),
            $: componentName,
        }]))
    }

    function move(currentId: string, targetId: string) {
        let result = findDelete(currentId, structure)
        if (result) {
            put(result.element,targetId, result.structure)
        } 
    }

    function remove(id: string) {
        setStructure(structure => filter(id,structure))
    }

    const context = {
        structure,
        current,
        target,
        focused,
        create,
        move,
        remove,
        setCurrent,
        setTarget,
        setFocused
    }

    return (
        <Split css={styles.container} direction="row" areaSize={4} positions={[25, 50, 25]}>
            <ComponentTree context={context} />
            <div></div>
            {/* <Render
                context={context}
            />
            <PreferencePanel
                context={context}
            /> */}
        </Split>
    )
}