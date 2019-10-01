import React, { forwardRef } from 'react';
import BadgeTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import getStyles from './styles';

const Badge = (props: BadgeTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = getStyles(props);

    return (
        <div css={styles.container}>
            <div
                {...attributes}
                ref={ref}
                children={props.content}
                css={styles.holder(!['string', 'number'].includes(typeof props.content))}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge);