import { jsx } from '@emotion/core';
import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import { forwardRef } from 'react';
import BlockStyles from './styles';
import BlockTypes from './types';

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