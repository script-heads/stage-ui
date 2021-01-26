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
            {...attributes}
            {...events.all}
            onChange={undefined}
            ref={ref} 
            decoration="surface" 
            onClick={(e) => props.onClick && props.onClick(e)} 
            css={cs.container}
            children={props.children}
        />
    )
}

export default forwardRef(Notifications)