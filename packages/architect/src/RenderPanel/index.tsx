import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Text, useTheme, Paragraph } from '@flow-ui/core'
import WhaleTypes from '@flow-ui/whale/types'
import { RefObject, useRef } from 'react'
import Mask, { MaskRefs } from './Mask'
import styles from './styles'
import { ScrollView } from '@flow-ui/lab'

export const componentsInvisibleWhenEmpty = [
    'Block',
    'Flexbox',
    'Grid',
    'Tree',
    'ScrollView',
]
export const componentsTypography = [
    'Header',
    'Display',
    'Paragraph',
    'Anchor',
    'Text'
]

interface RenderItemProps {
    item: ArchitectItem,
    tools: ArchitectTools
    theme: WhaleTypes.Theme,
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
        const rect: any = ref.current?.children[0]?.getBoundingClientRect() || {}
        const { left, top, width, height } = rect
        
        return {
            x: left,
            y: top,
            w: width,
            h: height
        }
    }

    let Component = (props) => (
        <Text 
            align="center"
            size={2} 
            color={c => c.error.hex()}
            children={`⚠ ${item.component} not found ⚠`}    
        />

    )

    if (tools.components[item.component]) {
        Component = tools.components[item.component].component
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

    const convertedProps: {[key: string]: unknown} = {}
    if (item.component === 'Icon') {
        if (item.props.type) {
            const keys = item.props.type.split('.') || []
            convertedProps.type = (t) => {
                if (t[keys[0]]) {
                    return t[keys[0]][keys[1]]
                }
                return t.outline.questionMark
            }
        }
    }
    return (
        <span
            ref={ref}
            css={{
                flex: item.props.flex
            }}
            children={(
                <Component
                    {...item.props}
                    {...convertedProps}
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
                    children={children}
                />
            )}
        />
    )
}

const Render = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const cs = styles(theme)
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
                        <Flexbox
                            column
                            css={{
                                color: theme.color.secondary.css(),
                                textAlign: 'center',
                                fontSize: '11px',
                            }}
                            children={`⇠ ${item.name || item.component} ⇢`}
                        />
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
        <Flexbox column flex={1} css={cs.container}>
            {architectItems.length === 0 && (
                <Flexbox justifyContent="center" pt="4.75rem" css={{ position: 'absolute', width: '100%' }}>
                    <Paragraph
                        align="center"
                        size={2}
                        color={c => c.light.hex()}
                        children="Create any component by droping it here."
                    />
                </Flexbox>
            )}
            <Block
                css={cs.scrollContainer}
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
        </Flexbox>
    )
}

export default Render