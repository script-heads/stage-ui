/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Notifications: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Notification', { 
        props, 
        styles, 
        styleProps: { container: ['all'] } 
    })

    return (
        <Block 
            decoration="surface" 
            css={cs.container}
            {...props}
            {...attributes}
            {...events.all}
            ref={ref}
            onChange={undefined}
            onClick={(e) => props.onClick && props.onClick(e)} 
        />
    )
}

export default forwardRef(Notifications)