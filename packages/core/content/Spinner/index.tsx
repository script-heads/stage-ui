import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Spinner: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const {
        children,
        shape,
        duration = 1,
        count = 12
    } = props
    
    const { cs, attributes, events } = useComponent('Spinner', { props, styles })

    let rectShape

    switch (shape) {
        case 'round':
            rectShape = {
                x: '10',
                width: '3.5',
                height: '3.5',
                ry: '3.5',
                rx: '3.5'
            }
            break
        case 'rounded':
            rectShape = {
                x: '11',
                width: '2.5',
                height: '6.5',
                ry: '3.5',
                rx: '3.5'
            }
            break
        default:
            rectShape = {
                x: '11',
                width: '2.5',
                height: '6.5'
            }
            break
    }

    return (
        <div {...attributes} {...events.all} css={cs.container} ref={ref}>
            {
                children
                    ? <div css={cs.children}>{children}</div>
                    : (
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" fill="currentColor" height="1em" width="1em">
                            {Array(count).fill('').map((e, i) =>
                                <g key={i} transform={`rotate(${i * 360 / count} 12 12)`}>
                                    <rect y="0" opacity=".2" {...rectShape}>
                                        <animate
                                            attributeName="opacity"
                                            values="1;0"
                                            keyTimes="0;1"
                                            dur={duration + 's'}
                                            begin={(i / (count / duration)) + 's'}
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                </g>
                            )}
                        </svg>
                    )
            }
        </div>
    )
}

export default forwardRef(Spinner)