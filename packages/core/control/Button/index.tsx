import { useComponent } from '@flow-ui/whale'
import React, { Fragment, forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Button: RefForwardingComponent<HTMLButtonElement, Types.Props> = (props, ref) => {
    
    const {
        disabled,
        decoration = 'filled',
        shape = 'rounded',
        size = 'm'
    } = props

    const { cs, attributes, events} = useComponent('Button', { 
        props, 
        styles, 
        styleProps: { 
            container: ['all']
        }, 
        focus: {
            applyDecoration: true
        }
    })

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
            events.all.onClick?.(event)
        }
    }
    
    const styleState = { shape, decoration, size }

    return (
        <button
            {...attributes}
            {...events.all}
            ref={ref}
            css={cs.container(styleState)}
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
            children={(
                <Fragment>
                    {props.leftChild && (
                        <div 
                            css={cs.child({ align: 'left', ...styleState })}
                            children={props.leftChild}
                        />
                    )}
                    {props.children}
                    {props.rightChild && (
                        <div 
                            css={cs.child({ align: 'right', ...styleState })}
                            children={props.rightChild}
                        />
                    )}
                </Fragment>
            )}
        />
    )
}

export default forwardRef(Button)