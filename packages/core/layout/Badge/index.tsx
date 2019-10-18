import React, { forwardRef } from 'react';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';
import bageStyles from './styles';
import useStyles from '../../misc/hooks/useStyles';

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