import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import React, { forwardRef } from 'react';
import getStyles from './styles';
import PanelTypes from './types';

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