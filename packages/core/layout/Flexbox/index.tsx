import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';
import useStyleProps from '../../misc/hooks/useStyleProps';

const Flexbox = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: [
                {
                    position: "relative",
                    display: props.inline ? 'inline-flex' : 'flex',
                    alignItems: props.alignItems,
                    alignContent: props.alignContent,
                    justifyContent: props.justifyContent,
                    justifyItems: props.justifyItems,
                    flexDirection: props.column ? "column" : props.direction,
                    flexFlow: props.flow,
                    flexWrap: props.wrap,
                },
                styleProps.all
            ]
        },
        props.children
    );
}

export default forwardRef(Flexbox);