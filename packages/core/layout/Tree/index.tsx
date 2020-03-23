import { Block, Flexbox } from '@flow-ui/core'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, Fragment, RefForwardingComponent, useState } from 'react'
import styles from './styles'
import TreeLabel from './TreeLabel'
import TreeLeftChild from './TreeLeftChild'
import TreeRightChild from './TreeRightChild'
import Types from './types'

const Tree: RefForwardingComponent<HTMLDivElement, Types.Props> = (props: Types.PrivateProps, ref) => {
    let {
        children,
        leftChild,
        rightChild,
        label,
        size,
        decoration = 'drop' as Types.Props['decoration'],
        /**
         * private props
         */
        lvl = 0,
        isParentOpen = true
    } = props

    const [isOpen, setOpen] = useState((props.open || props.defaultOpen) ? true : false)

    const { cs, attributes, events } = useComponent('Tree', {
        props,
        styles,
        styleProps: { 
            row: ['all'] 
        },
        focus: {
            applyDecoration: true
        }
    })

    let childs: ({
        child?: React.ReactNode
        tree?: Types.ExtentedReactElement
    })[] = []

    if (!Array.isArray(children)) {
        children = [children]
    }

    for (const child of children as Types.ExtentedReactElement[]) {
        try {
            if (child.type.render.name === 'Tree') {
                childs.push({ tree: child })
                continue
            }
            throw new Error()
        } catch (error) {
            if (child) {
                childs.push({ child })
            }
        }
    }

    const hasChilds = childs.length > 0

    const openHandle = (event) => {
        if (!props.open && hasChilds) {
            setOpen(!isOpen)
        }
        events.all.onClick && events.all.onClick(event)
    }

    const keyPressHandle = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            openHandle(event)
        }
    }

    const variant = { decoration, size, hasChilds }
    const options = { isOpen, isParentOpen, hasChilds, lvl }
    const Container = lvl === 0 ? Block : Fragment
    let containerProps = {}
    if (lvl === 0) {
        containerProps = {
            css: cs.container(variant)
        }
    }
    return (
        <Container {...containerProps}>
            {isParentOpen && (
                <Flexbox
                    ref={ref}
                    css={cs.row(variant)}
                    {...attributes}
                    {...events.all}
                    onKeyPress={keyPressHandle}
                    onClick={openHandle}
                    alignItems="center"
                    children={(
                        <Fragment>
                            <TreeLeftChild
                                css={cs.arrow(variant)}
                                options={options}
                                size={size}
                                children={leftChild}
                            />
                            <TreeLabel
                                css={cs.label(variant)}
                                options={options}
                                size={size}
                                children={label}
                            />
                            <TreeRightChild
                                options={options}
                                size={size}
                                children={rightChild}
                            />
                        </Fragment>
                    )}
                />
            )}
            {
                childs.map((child, index) => (
                    <Fragment key={index}>
                        {
                            child.tree
                                ? React.cloneElement(child.tree as any, {
                                    size: child.tree.props.size || props.size,
                                    decoration: child.tree.props.decoration || props.decoration,
                                    lvl: lvl + 1,
                                    isParentOpen: !isParentOpen ? false : isOpen
                                })
                                : isOpen ? child.child : null
                        }
                    </Fragment>
                ))
            }
        </Container>
    )
}

export default forwardRef(Tree)