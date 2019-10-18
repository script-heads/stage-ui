import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';
import blockStyles from './styles';
import useStyles from '../../misc/hooks/useStyles';

const Block = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = useStyles<Types.StyleKeys, Types.Variants>(props, blockStyles, 'Block');

    return jsx(
        props.tag || 'div',
        {
            position: "relative",
            ...attributes,
            ref: ref,
            css: styles.container,
        },
        props.children
    );
}

export default forwardRef(Block);