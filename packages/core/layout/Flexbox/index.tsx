import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';
import useStyleProps from '../../misc/hooks/useStyleProps';
import useStyles from '../../misc/hooks/useStyles';
import useFlow from '../../misc/hooks/useFlow';

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