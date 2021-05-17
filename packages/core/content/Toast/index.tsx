/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Divider: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { cs, attributes, events } = useComponent('Divider', { props, styles, styleProps: { container: ['all']} })

    return (
        <div {...events.all} {...attributes} ref={ref} css={cs.container}>
            {!!props.leftChild && <div css={cs.leftChild}>
                {props.leftChild}
            </div>}
            <div css={cs.content}>
                {props.children || props.label}
            </div>
            {!!props.rightChild && <div css={cs.rightChild}>
                {props.rightChild}
            </div>}
        </div>
    )
}

export default forwardRef(Divider)
