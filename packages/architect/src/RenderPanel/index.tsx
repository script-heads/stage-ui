import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import * as Core from '@flow-ui/core'
import { Block, Flexbox, Text, useFlow } from '@flow-ui/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'
import * as Lab from '@flow-ui/lab'
import { RefObject, useRef } from 'react'
import Mask, { MaskRefs } from './mask'
import createStyles from './styles'

const componentSearchLibs = [
    Core,
    Lab
]
const componentsInvisibleWhenEmpty = [
    'Block',
    'Flexbox'
]
interface RenderItemProps {
    item: ArchitectItem,
    tools: ArchitectTools
    theme: ThemeTypes.Index,
    mask: {
        hover: RefObject<MaskRefs>
        target: RefObject<MaskRefs>
        focus: RefObject<MaskRefs>
    }

}
const RenderItem = (props: RenderItemProps) => {

    const { item, tools, theme, mask } = props

    const ref: RefObject<HTMLSpanElement> = useRef(null)

    item.$.getRect = () => {
        const { left, top, width, height } = ref.current?.getBoundingClientRect() as any
        return {
            x: left,
            y: top,
            w: width,
            h: height
        }
    }

    let Component = (props) => (
        <Flexbox column p="1rem" css={{ color: theme.color.light.css() }}>
            <Text size={1} weight="bold">{item.name || item.component}</Text>
            <Text size={2} color={c => c.accent.red.hex()}>No component found!</Text>
        </Flexbox>
    )

    for (let lib of componentSearchLibs) {
        if (lib[item.component]) {
            Component = lib[item.component]
            break
        }
    }

    let children = item.children?.map((child) =>
        <RenderItem
            mask={mask}
            key={child.id}
            tools={tools}
            item={child}
            theme={theme}
        />
    )

    if (!children || children.length === 0) {
        children = item.props.children || item.text || null
    }

    return (
        <span
            ref={ref}
            children={(
                <Component
                    {...item.props}
                    draggable
                    onMouseEnter={(e) => {
                        if (mask.hover.current && !tools.captured) {
                            mask.hover.current.update(
                                item.$.getRect(),
                                item.component
                            )
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (mask.hover.current) {
                            mask.hover.current.hide()
                        }
                    }}
                    onDragStart={(e) => {
                        e.stopPropagation()
                        tools.captured = item
                    }}
                    onDragOver={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        if (tools.captured) {
                            if (tools.captured.id === item.id) {
                                tools.target = item.parent
                            } else {
                                tools.target = item
                            }
                            if (!tools.target?.children) {
                                tools.target = tools.target?.parent
                            }
                            if (tools.target && mask.target.current) {
                                mask.target.current.update(
                                    tools.target.$.getRect(),
                                    tools.target.component
                                )
                            }
                        }
                    }}
                    onDragLeave={(e) => {
                        e.stopPropagation()
                        if (mask.target.current) {
                            mask.target.current.hide()
                        }
                        if (mask.hover.current) {
                            mask.hover.current.hide()
                        }
                    }}
                    onDrop={(e) => {
                        e.stopPropagation()
                        props.tools.move()
                        if (mask.target.current) {
                            mask.target.current.hide()
                        }
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        tools.focused = item
                        tools.update()
                    }}
                    key={item.id}
                    children={children}
                />
            )}
        />
    )
}

const Render = (props: { tools: ArchitectTools }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { tools } = props
    const architectItems = tools.getItems()
    const hoverMask = useRef<MaskRefs>(null)
    const targetMask = useRef<MaskRefs>(null)
    const focusMask = useRef<MaskRefs>(null)

    function patchStyle(items: ArchitectItem[]) {
        for (const item of items) {
            if (componentsInvisibleWhenEmpty.includes(item.component)) {
                if (item.children?.length === 0 && !item.text) {
                    item.props.children = (
                        <Flexbox column p="1rem" css={{ color: theme.color.light.css() }}>
                            <Text size={1} weight="bold">{item.name || item.component}</Text>
                            <Text size={2}>Place any element here</Text>
                        </Flexbox>
                    )
                } else {
                    if (item.props.children) {
                        delete item.props.children
                    }
                }
            }
            if (Array.isArray(item.children)) {
                patchStyle(item.children)
            }
        }
    }

    patchStyle(architectItems)

    return (
        <Flexbox column flex={1} css={styles.container}>
            <Lab.ScrollView size="xsmall">
                <Block
                    css={styles.panel}
                    flex={1}
                    children={
                        architectItems.map((item) => (
                            <Block key={item.id}>
                                <RenderItem
                                    mask={{
                                        hover: hoverMask,
                                        target: targetMask,
                                        focus: focusMask
                                    }}
                                    tools={tools}
                                    item={item}
                                    theme={theme}
                                />
                            </Block>
                        ))
                    }
                    onDragOver={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        tools.target = null
                    }}
                    onDrop={(e) => {
                        e.stopPropagation()
                        if (tools.captured) {
                            tools.move()
                        }
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        tools.focused = null
                        tools.update()
                    }}
                />
                <Mask ref={hoverMask} color={c => c.primary.alpha(0.5).hex()} />
                <Mask ref={targetMask} color={c => c.primary.hex()} />
                <Mask 
                    ref={focusMask} 
                    color={c => c.secondary.hex()}
                    item={tools.focused}
                />
            </Lab.ScrollView>
        </Flexbox>
    )
}

export default Render