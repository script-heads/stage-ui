import { useComponent } from '@flow-ui/whale'

import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Button: RefForwardingComponent<HTMLButtonElement, Types.Props> = (props, ref) => {
    
    const {
        disabled,
        decoration = 'filled',
        shape = 'rounded',
        size = 'm'
    } = props

    const { cs, attributes, events } = useComponent('Button', { props, styles, styleProps: { container: ['all']} })

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled) {
            events.all.onClick?.(event)
        }
    }

    return (
        <button
            {...attributes}
            {...events.all}
            ref={ref}
            css={cs.container({ shape, decoration, size })}
            onClick={onClick}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            name={props.name}
            type={props.type}
            value={props.value}
            children={props.children}
        />
    )
}

export default forwardRef(Button)