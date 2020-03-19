import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Svg: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props) => {

    const { size = 'm', shape } = props
    const { cs, attributes, events } = useComponent('Icon', {
        props,
        styles,
        styleProps: {
            container: ['all'], 
        }
    })

    return (
        <span
            {...attributes}
            {...events.all}
            css={cs.container({ 
                size, 
                shape,
            })}
            children={(
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    children={props.svg}
                    css={cs.icon}
                />
            )}
        />
    )
}

type Icons = { 
    filled: React.ReactElement
    outline: React.ReactElement
}

export const createIcon = (props: Types.IconProps = {}, icons: Icons) => {

    return (
        <Svg 
            {...props} 
            svg={
                icons[props.type || 'outline']
            }
        />
    )
}

export type Props = Types.IconProps