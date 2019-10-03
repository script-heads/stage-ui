import React, { FC, forwardRef, useRef, useState, useEffect } from 'react';
import getStyles from './styles';
import FieldTypes from './types';
import useContainer from '../../hooks/useContainer';
import Icon from '../../../content/Icon';

const Field: FC<FieldTypes.Props> = (props, ref) => {

    const {
        decoration = 'outline',
        size = 'medium',
        name,
        label,
        clearable,
        onClear,
        isEmpty
    } = props;
    const { attributes, focus } = useContainer(props, true, decoration != 'none');
    const styles = getStyles(props);
    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xlarge');
    const isLabelOverlay = (isEmpty && !focus && !isLabelOutside) ? true : false

    useEffect(() => {
        props.onLabelOverlay && props.onLabelOverlay(isLabelOverlay);
    }, [isLabelOverlay])

    const Label = (
        <label
            css={styles.label(isLabelOutside, isLabelOverlay)}
            htmlFor={name}
            children={label}
        />
    )

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container}
            tabIndex={0}
        >
            {label && isLabelOutside && Label}
            {
                //@ts-ignore
                <div css={styles.field(focus)} disabled={props.disabled}>
                    {props.leftChild && (
                        <div css={styles.child('left')}>
                            {props.leftChild}
                        </div>
                    )}
                    <div css={styles.content(isLabelOverlay)}>
                        {label && !isLabelOutside && Label}
                        {props.children}
                    </div>
                    {(clearable || props.rightChild) && (
                        <div css={styles.child('right')}>
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