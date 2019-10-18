import { jsx } from '@emotion/core';
import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import { forwardRef } from 'react';
import Types from './types';

const Flexbox = (props: Types.Props, ref) => {
    const {theme} = useFlow();
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);
    const styles = useStyles(props, {
        containter: [
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
            theme.overrides.Flexbox
        ]
    }, 'Flexbox')

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: styles.containter
        },
        props.children
    );
}

export default forwardRef(Flexbox);