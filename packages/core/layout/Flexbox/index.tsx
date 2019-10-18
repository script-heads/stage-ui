import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';
import useStyleProps from '../../misc/hooks/useStyleProps';
import useStyles from '../../misc/hooks/useStyles';

const Flexbox = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);
    const styles = useStyles<Types.StylesKeys>(props, {
        container: [
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
            styleProps.all,
        ]
    }, 'Flexbox')

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: styles.container
        },
        props.children
    );
}

export default forwardRef(Flexbox);