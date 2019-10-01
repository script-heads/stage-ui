import React, { FC, forwardRef, useState, useEffect, Fragment } from 'react';
import getStyles from './styles';
import MenuTypes from './types';
import Item from './Item';
import useContainer from '../../misc/hooks/useContainer';
import createID from '../../misc/utils/createID';

const Menu: FC<MenuTypes.Props> = (props, ref) => {
    const { children, defaultValue = null, separator } = props;
    const { attributes } = useContainer(props);
    const styles = getStyles(props);
    const valueState = useState<number | null>(defaultValue);
    const value = typeof props.value != 'undefined'
        ? props.value
        : valueState[0];
    const setValue = valueState[1];

    function handleSwitch(value, disabled) {
        if (!disabled) {
            setValue(value);
            props.onChange && props.onChange(value);
        }
    }

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container}
        >
            {Array.isArray(children) && children.map((child, i) => {
                // const disabled = props.disabled || child.props && child.props.disabled
                const disabled = false
                return (
                    <Fragment key={createID()}>
                        {child && <Item
                            active={i === value}
                            onClick={() => handleSwitch(i, disabled)}
                            onEnter={() => handleSwitch(i, disabled)}
                            styles={styles}
                            children={child}
                            tabIndex={disabled ? -1 : 0}
                            disabled={disabled}
                        />}
                        {separator && i + 1 < children.length && (
                            <div css={styles.separator}>
                                {separator}
                            </div>
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default forwardRef(Menu);