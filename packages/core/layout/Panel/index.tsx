import React, { forwardRef, Fragment } from 'react';
import PanelTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import getStyles from './styles';

const Panel = (props: PanelTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = getStyles(props);

    return (
        <div ref={ref} {...attributes} css={styles.container}>
            {props.children}
        </div>
    )
}

export default forwardRef(Panel);