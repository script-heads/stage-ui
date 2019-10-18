import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import React, { forwardRef } from 'react';
import getStyles from './styles';
import PopoverTypes from './types';

const Popover = (props: PopoverTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = getStyles(props);

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container}

        >
            <div css={styles.arrow} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover);