/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Notifications: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { classes, attributes, events } = useSystem('Notification', { 
        props, 
        styles, 
        styleProps: { container: ['all'] } 
    })

    return (
        <Block 
            decoration="surface" 
            css={classes.container}
            {...props}
            {...attributes}
            {...events}
            ref={ref}
            onChange={undefined}
            onClick={(e) => props.onClick && props.onClick(e)} 
        />
    )
}

export default forwardRef(Notifications)