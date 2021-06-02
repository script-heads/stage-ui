/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Divider, Flexbox } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, Fragment } from 'react'
import styles from './styles'
import Types from './types'

const Toolbar: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    let children = Array.isArray(props.children)
        ? props.children
        : [props.children]

    const {
        decoration = 'surface',
        alignItems = 'stretch',
        p = '0.5rem',
        inline = true
    } = props

    const { cs, attributes, events } = useSystem('Toolbar', {
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
                                m={!props.column ? '0 .5rem' : '.5rem 0'}
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