import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, Fragment } from 'react'
import styles from './styles'
import Types from './types'
import { Flexbox, Divider } from '@flow-ui/core'

const Toolbar: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    let children = Array.isArray(props.children)
        ? props.children
        : [props.children]
    
    const { 
        decoration = 'surface',
        alignItems = 'stretch',
        p = '0.5rem',
        inline = true
     } = props

    const { cs, attributes, events } = useComponent('Toolbar', { 
        props, 
        styles, 
    })

    return (
        <Flexbox 
            {...props} 
            p={p}
            inline={inline}
            alignItems={alignItems}
            decoration={decoration}
            children={children.map((child, index) => {
                return (
                    <Fragment key={index}>
                        <span css={{ alignSelf: 'center' }}>
                            {child}
                        </span>
                        {(children.length > index + 1) && (
                            <Divider
                                h={!props.column ? 'auto' : undefined}
                                m={!props.column ? '0 .5rem' :'.5rem 0'}
                                vertical={!props.column}
                            />
                        )}
                    </Fragment>
                )
            })}
        />
    )
}

export default forwardRef(Toolbar)