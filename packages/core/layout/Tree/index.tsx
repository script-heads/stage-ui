import Icon from '@flow-ui/core/content/Icon'
import Text from '@flow-ui/core/content/Text'
import Block from '@flow-ui/core/layout/Block'
import Flexbox from '@flow-ui/core/layout/Flexbox'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, useState } from 'react'
import styles from './styles'
import Types from './types'

const Tree: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    let {
        children,
        decoration = 'drop' as Types.Props['decoration'],
        //@ts-ignore
        lvl = 0
    } = props

    const [isOpen, setOpen] = useState((props.alwaysOpen || props.defaultOpen) ? true : false)

    const { cs, attributes, events } = useComponent('Tree', { props, styles, styleProps: {container: ['all']} })

    let treeChilds: React.ReactNode[] = []
    let otherChilds: React.ReactElement[] = []

    if (!Array.isArray(children)) {
        children = [children]
    }

    for (const child of children as any) {
        try {
            if (child.type.render.name === 'Tree') {
                treeChilds.push(child)
                continue
            }
            throw new Error()
        } catch (error) {
            if (child) {
                otherChilds.push(child)
            }
        }
    }

    const hasTreeChilds = treeChilds.length > 0 || otherChilds.length > 0
    const needIndent = lvl > 0 && (props.indent === true || (props.indent !== false && decoration === 'drop'))
    const disabled = decoration === 'drop' && (props.alwaysOpen || hasTreeChilds === false)

    const openHandle = (event) => {
        if (!props.alwaysOpen && hasTreeChilds) {
            setOpen(!isOpen)
        }
        attributes.onClick && attributes.onClick(event)
    }

    const keyPressHandle = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            openHandle(event)
        }
    }

    let label = props.label

    if (typeof label === 'string') {
        label = <Text css={cs.label}>{label}</Text>
    }
    if (typeof label === 'function') {
        label = label(isOpen)
    }

    return (
        <Block ref={ref} css={cs.container({ decoration, needIndent })}>
            <Flexbox {...attributes} {...events.all} onKeyPress={keyPressHandle} onClick={openHandle} alignItems="center">
                <Icon
                    type={t => isOpen ? t.outline.arrowIosDownward : t.outline.arrowIosForward}
                    css={cs.icon({ decoration, disabled })}
                />
                {label}
            </Flexbox>
            <Block>
                {
                    treeChilds.map((child: React.ReactElement, index) => (
                        <Block css={cs.child({ isOpen })} key={index}>
                            {
                                React.cloneElement(child, {
                                    decoration: child.props.decoration || props.decoration,
                                    alwaysOpen: child.props.alwaysOpen || props.alwaysOpen,
                                    lvl: lvl + 1
                                })
                            }
                        </Block>
                    ))
                }
                {
                    otherChilds.map((child: React.ReactElement, index) => (
                        <Block css={cs.child({ isOpen })} key={index} children={child} />
                    ))
                }
            </Block>
        </Block>
    )
}

export default forwardRef(Tree)