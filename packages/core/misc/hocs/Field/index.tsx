import React, { FC, forwardRef } from 'react';
import Types from './types';
import Icon from '../../../content/Icon';

const Field: FC<Types.PrivateProps> = (props, ref) => {

    const {
        decoration,
        shape,
        size,
        labelName,
        label,
        clearable,
        onClear,
        attributes,
        focus,
        styles,
        isLabelOutside, 
        isLabelOverlay,
        disabled
    } = props;

    const Label = (
        <label
            css={styles.label({isLabelOutside, isLabelOverlay, size})}
            htmlFor={labelName}
            children={label}
        />
    )

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container}
        >
            {label && isLabelOutside && Label}
            {
                <div css={styles.field({focus, size, decoration, shape, disabled})}>
                    {props.leftChild && (
                        <div css={styles.child({align: 'left', size})}>
                            {props.leftChild}
                        </div>
                    )}
                    <div css={styles.content({isLabelOverlay})}>
                        {label && !isLabelOutside && Label}
                        {props.children}
                    </div>
                    {(clearable || props.rightChild) && (
                        <div css={styles.child({align: 'right', size})}>
                            {clearable && <Icon
                                type={i => i.filled.close}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClear && onClear();
                                }}
                            />}
                            {props.rightChild}
                        </div>
                    )}
                </div>
            }
            {props.hint &&
                <div css={styles.hint}>
                    {props.hint}
                </div>
            }
        </div>
    )
}

export default forwardRef(Field);