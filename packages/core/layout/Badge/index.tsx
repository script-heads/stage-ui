
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Badge: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { css, attributes } = useComponent('Badge', { props, styles })

    return (
        <div css={css.container}>
            <div
                {...attributes}
                ref={ref}
                children={props.content}
                css={css.holder({align: props.align})}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge)