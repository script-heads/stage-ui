import { useComponent } from '@flow-ui/whale'

import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Button: RefForwardingComponent<HTMLButtonElement, Types.Props> = (props, ref) => {
    styles
    const {
        disabled,
        decoration = 'filled',
        shape = 'rounded',
        size = 'medium'
    } = props
    
    const { css, attributes } = useComponent('Button', { props, styles })

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled) {
            attributes.onClick?.(event)
        }
    }

    return (
        <button
            {...attributes}
            ref={ref}
            css={css.container({ shape, decoration, size })}
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