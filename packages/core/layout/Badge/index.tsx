import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import React, { forwardRef } from 'react';
import BageStyles from './styles';
import BadgeTypes from './types';

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