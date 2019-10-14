import { jsx } from '@emotion/core';
import { forwardRef, RefObject } from 'react';
import useStyleProps from '../../misc/hooks/useStyleProps';
import useContainer from '../../misc/hooks/useContainer';
import Types from './types';
import useFlow from '../../misc/hooks/useFlow';

const Grid = (props: Types.Props, ref: RefObject<HTMLDivElement>) => {
    const { theme } = useFlow();
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
                theme.overrides.Grid
            ]
        },
        props.children
    );
}

export default forwardRef(Grid);