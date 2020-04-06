import React, { forwardRef, Fragment, RefForwardingComponent, useState } from 'react'
import styles from './styles'
import Types from './types'
import { useComponent } from '@stage-ui/system'
import MenuItem from '../MenuItem'
import { ArrowIosDownward } from '../../../icons'

const Submenu: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { 
        rightChild,
        leftChild,
        disabled,
        indent,
    } = props

    const [open, setOpen] = useState(props.open || props.defaultOpen || false)

    const { cs, attributes, events } = useComponent('Submenu', { 
        props, 
        styles, 
        styleProps: { 
            container: ['all'],
        },
    })
    const attr: Record<string, string> = {
        'data-flow': 'sub-menu'
    }
    if (open) attr['data-flow-open'] = ''
    if (disabled) attr['data-flow-disabled'] = ''

    return (
        <div {...attr}>
            <MenuItem 
                disabled={disabled}
                title={props.title} 
                leftChild={leftChild}
                rightChild={rightChild || (
                    <div data-flow="sub-menu-arrow">
                        <ArrowIosDownward />
                    </div>
                )}
                onClick={() => {
                    if (!disabled) {
                        setOpen(!open)
                    }
                }}
            />
            <div
                data-flow="sub-menu-content"
                {...attributes}
                {...events.all}
                onChange={undefined}
                ref={ref}
                css={cs.container}
                children={props.children || props.title}
            />
        </div>
    )
}

export default forwardRef(Submenu)