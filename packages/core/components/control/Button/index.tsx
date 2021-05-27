/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, Fragment } from 'react'
import styles from './styles'
import Types from './types'

const Button: ForwardRefRenderFunction<HTMLButtonElement, Types.Props> = (props, ref) => {
    
    const {
        disabled,
        decoration = 'filled',
        shape = 'rounded',
        size = 'm'
    } = props

    const { classes, attributes, events} = useSystem('Button', { 
        props, 
        styles, 
        styleProps: { 
            container: ['all']
        }, 
        focus: {
            applyDecoration: true,
            ignoreMouse: true,
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
            {...events}
            ref={ref}
            css={classes.container(styleState)}
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
                            css={classes.child({ align: 'left', ...styleState })}
                            children={props.leftChild}
                        />
                    )}
                    {props.children || props.label}
                    {props.rightChild && (
                        <div 
                            css={classes.child({ align: 'right', ...styleState })}
                            children={props.rightChild}
                        />
                    )}
                </Fragment>
            )}
        />
    )
}

export default forwardRef(Button)