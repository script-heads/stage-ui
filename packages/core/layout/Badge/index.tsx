import React, { forwardRef } from 'react';
import BadgeTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import BageStyles from './styles';

const Badge = (props: BadgeTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = BageStyles(props);

    return (
        <div css={styles.container}>
            <div
                {...attributes}
                ref={ref}
                children={props.content}
                css={styles.holder()}
            />
            {props.children}
        </div>
    )
}

export default forwardRef(Badge);