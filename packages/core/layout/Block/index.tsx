import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import BlockTypes from './types';
import useContainer from '../../misc/hooks/useContainer';
import BlockStyles from './styles';

const Block = (props: BlockTypes.Props, ref) => {
    const { attributes } = useContainer(props);
    const styles = BlockStyles(props);

    return jsx(
        props.tag || 'div',
        {
            position: "relative",
            ...attributes,
            ref: ref,
            css: styles.container(),
        },
        props.children
    );
}

export default forwardRef(Block);