import React, { forwardRef } from 'react';
import PopoverTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import getStyles from './styles';

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