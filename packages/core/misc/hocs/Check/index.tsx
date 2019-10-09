import React, { forwardRef, RefObject, useEffect, useState } from 'react';
import useContainer from '../../hooks/useContainer';
import createStyles from './styles';
import CheckTypes from './types';

const Check = (props: CheckTypes.Props, ref: RefObject<HTMLDivElement>) => {
    const [checked, setChecked] = useState(props.checked || props.defaultValue || false);
    const { label } = props;
    const { attributes } = useContainer(props);

    const styles = createStyles(props);

    useEffect(() => {
        if (typeof props.checked !== "undefined") {
            setChecked(props.checked);
        }
    }, [props.checked]);

    function onClick(e: Event) {
        if (!props.disabled) {
            props.onChange && props.onChange(!checked);
            if (typeof props.checked === "undefined") {
                setChecked(!checked);
            }
        }
        attributes.onClick && attributes.onClick(e)
    }

    const containerProps = {
        ref,
        ...attributes,
        css: styles.container,
        onClick
    }
    return (
        <div {...containerProps}>
            {props.children(checked)}
            {(label && label.length) && (
                <div css={styles.label} children={label} />
            )}
        </div>
    )
}

export default forwardRef(Check);