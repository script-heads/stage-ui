import React, { forwardRef, RefForwardingComponent } from 'react'
import { Close } from '@stage-ui/core/icons'
import Types from './types'

const Field: RefForwardingComponent<HTMLDivElement, Types.PrivateProps> = (props, ref) => {

    const {
        labelName,
        labelType = 'outside',
        label,
        clearable,
        onClear,
        attributes,
        events,
        styles,
    } = props

    const state = {
        focus: props.focus,
        size: props.size, 
        decoration: props.decoration,
        labelType: props.labelType,
        shape: props.shape,
        disabled: props.disabled,
        ...props.state
    }

    return (
        <div
            {...attributes}
            {...events}
            ref={ref}
            css={styles.container(state)}
        >
            {label !== undefined && labelType === 'outside' &&  (
                <label
                    css={styles.label(state)}
                    htmlFor={labelName}
                    children={label}
                />
            )}
            {
                <div css={styles.field(state)}>
                    {props.leftChild && (
                        <div 
                            css={styles.child({align: 'left', ...state})}
                            children={props.leftChild}
                        />
                    )}
                    <div css={styles.content(state)}>
                        {label !== undefined && labelType === 'inside' && (
                            <label
                                css={styles.label(state)}
                                htmlFor={labelName}
                                children={label}
                            />
                        )}
                        {props.children}
                    </div>
                    {clearable && (
                        <div
                            css={styles.child({ align: 'right', ...state })}
                            children={(
                                <Close
                                    onMouseDown={e => {
                                        if (onClear) {
                                            e.stopPropagation()
                                            onClear()
                                        }
                                    }}
                                    onTouchStart={e => {
                                        if (onClear) {
                                            e.stopPropagation()
                                            onClear()
                                        }
                                    }}
                                    css={styles.clearButton}
                                    size={state.size}
                                />
                            )}
                        />
                    )}
                    {props.rightChild && (
                        <div 
                            css={styles.child({align: 'right', ...state})}
                            children={props.rightChild}
                        />
                    )}
                </div>
            }
            {props.hint &&
                <div css={styles.hint(state)}>
                    {props.hint}
                </div>
            }
        </div>
    )
}

export default forwardRef(Field)