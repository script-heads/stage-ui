import React, { forwardRef } from 'react';
import BadgeTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import BageStyles from './styles';
import useStyles from '../../misc/hooks/useStyles';

const Badge = (props: BadgeTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = useStyles(props,BageStyles,'Badge');

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