import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefObject, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

type SVG = RefForwardingComponent<HTMLSpanElement, Types.Props & {  reference?: RefObject<HTMLSpanElement> }>

const Svg: SVG = (props) => {

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
            ref={props.reference}
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

export const createIcon = (props: Types.IconProps = {}, ref: RefObject<HTMLSpanElement>, icons: Icons) => {
    return (
        <Svg 
            reference={ref}
            {...props} 
            svg={
                icons[props.type || 'outline']
            }
        />
    )
}

export type Props = Types.IconProps