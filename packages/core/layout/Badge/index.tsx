import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import React, { forwardRef } from 'react';
import bageStyles from './styles';
import Types from './types';

const Badge = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = useStyles<Types.StyleKeys>(props,bageStyles,'Badge');

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