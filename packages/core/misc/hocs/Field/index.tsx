import React, { FC, forwardRef } from 'react'
import Types from './types'
import Icon from '../../../content/Icon'

const Field: FC<Types.PrivateProps> = (props, ref) => {

    const {
        labelName,
        label,
        clearable,
        onClear,
        attributes,
        styles,
        isLabelOutside, 
    } = props

    const state = {
        focus: props.focus,
        size: props.size, 
        decoration: props.decoration,
        shape: props.shape,
        disabled: props.disabled,
        isLabelOverlay: props.isLabelOverlay,
        isLabelOutside,
        ...props.state
    }

    const Label = (
        <label
            css={styles.label(state)}
            htmlFor={labelName}
            children={label}
        />
    )

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container(state)}
        >
            {label && isLabelOutside && Label}
            {
                <div css={styles.field(state)}>
                    {props.leftChild && (
                        <div css={styles.child({align: 'right', ...state})}>
                            {props.leftChild}
                        </div>
                    )}
                    <div css={styles.content(state)}>
                        {label && !isLabelOutside && Label}
                        {props.children}
                    </div>
                    {(clearable || props.rightChild) && (
                        <div css={styles.child({align: 'right', ...state})}>
                            {clearable && <Icon
                                type={i => i.filled.close}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onClear && onClear()
                                }}
                            />}
                            {props.rightChild}
                        </div>
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