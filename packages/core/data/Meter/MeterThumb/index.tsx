import { useComponent } from '@stage-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const MeterThumb: RefForwardingComponent<HTMLDivElement, Types.PrivateProps> = (props, ref) => {

    const {
        shape = 'round',
        size = 'm',
        value = 0,
    } = props

    const { cs, attributes, events } = useComponent('MeterThumb', {
        props,
        styles,
        styleProps: {
            container: ['all']
        },
        focus: {
            applyDecoration: true
        }
    })

    // TODO: circle support
    // return (
    //     <svg viewBox="22 22 44 44">
    //         <circle
    //             cx="44"
    //             cy="44"
    //             r="18"
    //             fill="none"
    //             stroke="#000000"
    //             strokeWidth="4"
    //             strokeDasharray="113.1"
    //             strokeDashoffset="10"
    //         />
    //     </svg>
    // )
    
    return (
        <div
            {...attributes}
            {...events.all}
            css={cs.container({ shape, size })}
            style={{
                width: value + '%'
            }}
        />
    )
}

export default MeterThumb