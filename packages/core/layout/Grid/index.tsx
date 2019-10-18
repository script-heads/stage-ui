import { jsx } from '@emotion/core';
import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import { forwardRef, RefObject } from 'react';
import Types from './types';

const Grid = (props: Types.Props, ref: RefObject<HTMLDivElement>) => {
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);
    const styles = useStyles<Types.StylesKeys>(props, {
        container: [
            {
                position: "relative",
                display: props.inline ? 'inline-grid' : 'grid',

                gridTemplateColumns: props.templateColumns,
                gridTemplateRows: props.templateRows,
                gridTemplateAreas: props.templateAreas,

                gridColumnGap: props.columnGap,
                gridRowGap: props.rowGap,
                gridGap: props.gap,

                gridAutoColumns: props.autoColumns,
                gridAutoRows: props.autoRows,
                gridAutoFlow: props.autoFlow,

                alignItems: props.alignItems,
                alignContent: props.alignContent,
                justifyContent: props.justifyContent,
                justifyItems: props.justifyItems,
            },
            styleProps.all,
        ]
    }, 'Grid')

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

export default forwardRef(Grid);