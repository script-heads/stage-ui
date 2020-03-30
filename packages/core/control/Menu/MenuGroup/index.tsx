import { useComponent } from '@flow-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const MenuGroup: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { 
        rightChild,
        leftChild,
     } = props
     
    const { cs, attributes, events } = useComponent('MenuGroup', {
        props,
        styles,
        styleProps: {
            container: ['all'],
        },
    })

    return (
        <div
            {...attributes}
            {...events.all}
            onChange={undefined}
            data-flow="menu-group"
            css={cs.container}
        >
            <div data-flow="menu-group-title">
                {leftChild && <span data-flow="left">{leftChild}</span>}
                <span data-flow="middle">{props.title}</span>
                {rightChild && <span data-flow="right">{rightChild}</span>}
            </div>
            {props.children}
        </div>
    )
}

export default forwardRef(MenuGroup)