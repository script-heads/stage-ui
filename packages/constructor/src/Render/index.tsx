import * as Core from '@flow-ui/core'
import { Block, Button, Icon, Paragraph, Text, Flexbox, useFlow } from '@flow-ui/core'
import { useRef } from 'react'
import { ConstructorContext, StructureItem } from '@flow-ui/constructor/types'
import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'
import createStyles from './styles'

const Render = (props: { context: ConstructorContext } ) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { context } = props
    const { structure } = context

    function patchStyle(structureItems: StructureItem[]) {
        for (const structureItem of structureItems) {
            if (structureItem.$ === 'Block' || structureItem.$ === 'Flexbox') {
                if (structureItem.$empty) {
                    structureItem.children = (
                        <Flexbox column p="1rem" css={{ color: theme.color.light.css() }}>
                            <Text size={1} weight="bold">{structureItem.$name || structureItem.$}</Text>
                            <Text size={2}>Place any element here</Text>
                        </Flexbox>
                    )
                } else {
                    if (structureItem.children) {
                        delete structureItem.children
                    }
                }
            }
            if (Array.isArray(structureItem.$children)) {
                patchStyle(structureItem.$children)
            }
        }
    }

    type SceneStructure = {
        $children?: StructureItem[]
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

    const doRenderRecursive = (structureItem: StructureItem) => {

        structureItem.$ref = useRef(null)
        const ref = structureItem.$ref?.captured

        structureItem.$getRect = () => {
            const { top, left, width, height } = ref?.getBoundingClientRect()
            return {
                x: left,
                y: top,
                w: width,
                h: height
            }
        }

        const elAttributes: { [key: string]: string } = {}

        Object.keys(structureItem).map(key => {

            if (key[0] !== '$') {
                elAttributes[key] = structureItem[key]
            }
        })

        const Component = Core[structureItem.$]
        const childrens = structureItem.$children?.map(doRenderRecursive)
        return (
            <Component
                {...elAttributes}
                draggable
                onDragStart={(e) => {
                    e.stopPropagation()
                    context.captured = structureItem
                }}
                onDragOver={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    context.target = structureItem
                    if (context.captured?.$id === context.target?.$id) {
                        context.target = null
                        return
                    }
                }}
                onDragLeave={(e) => {
                    e.stopPropagation()
                }}
                onDrop={(e) => {
                    e.stopPropagation()
                    props.context.move()
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    context.focused = structureItem
                    context.update()
                }}
                ref={structureItem.$ref}
                key={structureItem.$id}
                css={structureItem.$css}
                children={
                    (childrens && childrens.length > 0)
                        ? childrens
                        : (structureItem.children || null)
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
                    if (context.captured) {
                        context.move()
                    }
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    context.focused = null
                    context.update()
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
                    context.remove()
                }}
            />
        </Flexbox>
    )
}

export default Render