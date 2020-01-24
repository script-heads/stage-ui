import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import bageStyles from './styles'
import Types from './types'

const Badge: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Overrides>(props, bageStyles, 'Badge')

    return (
        <div css={styles.container}>
            <div
                {...attributes}
                ref={ref}
                children={props.content}
                css={styles.holder({align: props.align})}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge)