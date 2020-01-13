import * as Core from '@flow-ui/core'
import { Block, Button, Icon, Paragraph, Text, Flexbox, useFlow } from '@flow-ui/core'
import { useRef } from 'react'
import { StructureContext, ConstructorStructure } from '@flow-ui/constructor/types'
import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'
import styles from './styles'

const Render = (props: { context: StructureContext, onUpdate: () => void }) => {
    const { theme } = useFlow()
    const { context } = props
    const { structure } = context

    function patchStyle(structureEls: ConstructorStructure[]) {
        for (const structureEl of structureEls) {
            if (structureEl.$ === 'Block' || structureEl.$ === 'Flexbox') {
                if (structureEl.$empty) {
                    structureEl.children = (
                        <Flexbox column p="1rem" css={{ color: theme.color.light.css() }}>
                            <Text size={1} weight="bold">{structureEl.$name || structureEl.$}</Text>
                            <Text size={2}>Place any element here</Text>
                        </Flexbox>
                    )
                } else {
                    if (structureEl.children) {
                        delete structureEl.children
                    }
                }
            }
            if (Array.isArray(structureEl.$children)) {
                patchStyle(structureEl.$children)
            }
        }
    }

    type SceneStructure = {
        $children?: ConstructorStructure[]
        $empty?: boolean
    }

    function remove(uuid: string, obj: SceneStructure = { $children: structure }) {
        for (let prop in obj) {
            if (prop === '$id' && obj[prop] === uuid) {
                return false
            }
        }
        if (obj.$children) {
            obj.$children = obj.$children.filter(child => remove(uuid, child))
            obj.$empty = obj.$children.length === 0
        }
        return true
    }

    const doRenderRecursive = (structureEl: ConstructorStructure) => {

        structureEl.$ref = useRef(null)
        const ref = structureEl.$ref?.current

        structureEl.$getRect = () => {
            const { top, left, width, height } = ref?.getBoundingClientRect()
            return {
                x: left,
                y: top,
                w: width,
                h: height
            }
        }

        const elAttributes: { [key: string]: string } = {}

        Object.keys(structureEl).map(key => {

            if (key[0] !== '$') {
                elAttributes[key] = structureEl[key]
            }
        })

        const Component = Core[structureEl.$]
        const childrens = structureEl.$children?.map(doRenderRecursive)
        return (
            <Component
                {...elAttributes}
                draggable
                onDragStart={(e) => {
                    e.stopPropagation()
                    context.current = structureEl
                }}
                onDragOver={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    context.target = structureEl
                    if (context.current?.$id === context.target?.$id) {
                        context.target = null
                        return
                    }
                }}
                onDragLeave={(e) => {
                    e.stopPropagation()
                }}
                onDrop={(e) => {
                    e.stopPropagation()
                    if (context.current && context.target) {
                        if (Array.isArray(context.target.$children)) {
                            const rmid = context.current.$id
                            context.target.$children.push({
                                ...context.current,
                                $id: uuidv4()
                            })
                            context.target.$empty = false
                            remove(rmid)
                            props.onUpdate()
                        }
                    }
                    context.current = null
                    context.target = null
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    context.focused = structureEl
                    props.onUpdate()
                }}
                ref={structureEl.$ref}
                key={structureEl.$id}
                css={structureEl.$css}
                children={
                    (childrens && childrens.length > 0)
                        ? childrens
                        : (structureEl.children || null)
                }
            />
        )
    }

    patchStyle(structure)

    return (
        <Flexbox column pt="0.75rem" flex={1}>
            <Flexbox pr="0.75rem">
                <Paragraph
                    flex={1}
                    pl="0.5rem" 
                    size={0}
                    weight="bold"
                    color={c => c.light.hex()}
                    children="Workspace"
                />
                <Flexbox alignItems="center">
                    <Button size="xsmall"><Icon type={i => i.outline.plus} />New</Button>
                </Flexbox>
            </Flexbox>
            <Block
                flex={1}
                css={styles.container}
                children={
                    structure.map((element) => (
                        <Block key={element.$id}>
                            {doRenderRecursive(element)}
                        </Block>
                    ))
                }
                onDragOver={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
                onDrop={(e) => {
                    e.stopPropagation()
                    if (context.current) {
                        const rmid = context.current.$id
                        context.structure.push({
                            ...context.current,
                            $id: uuidv4()
                        })
                        remove(rmid)
                        props.onUpdate()
                    }
                    context.current = null
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    context.focused = null
                    props.onUpdate()
                }}
            />
            <Block
                m="0.5rem"
                mt="0"
                css={styles.deleteArea}
                children="Drop component here to delete."
                onDragOver={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
                onDrop={(e) => {
                    e.stopPropagation()
                    if (context.current) {
                        remove(context.current.$id)
                        props.onUpdate()
                    }
                    context.current = null
                }}
            />
        </Flexbox>
    )
}

export default Render