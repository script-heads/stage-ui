import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import BlockTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import BlockStyles from './styles';
import useStyles from '../../misc/hooks/useStyles';

const Block = (props: BlockTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = useStyles<BlockTypes.Styles, BlockTypes.Variants>(props, BlockStyles, 'Block');

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