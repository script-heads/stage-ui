/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Badge: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { classes, attributes, events } = useSystem('Badge', { 
        props, 
        styles, 
        styleProps: {
            container: ['flow'], 
            holder: ['self']
        }
    })

    return (
        <div css={classes.container}>
            <div
                {...attributes}
                {...events}
                ref={ref}
                children={props.content}
                css={classes.holder({
                    align: props.align,
                    shape: props.shape
                })}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge)