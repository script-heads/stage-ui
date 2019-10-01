import { InterpolationWithTheme, jsx, SerializedStyles } from '@emotion/core';
import { forwardRef, RefObject } from 'react';
import useStyleProps from '../../misc/hooks/useStyleProps';
import useContainer from '../../misc/hooks/useContainer';
import Types from './types';

const Grid = (props: Types.Props, ref: RefObject<HTMLDivElement>) => {
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);

    const cssProps: InterpolationWithTheme<SerializedStyles> = {
        position: "relative",
        display: props.inline ? 'inline-grid' : 'grid',
        gridTemplate: props.template,
        gridTemplateColumns: props.templateColumns,
        gridTemplateRows: props.templateRows,
        gridTemplateAreas: props.templateAreas,
        gridColumnGap: props.columnGap,
        gridRowGap: props.rowGap,
        gridAutoColumns: props.autoColumns,
        gridAutoRows: props.autoRows,
        gridAutoFlow: props.autoFlow,
        justifyItems: props.justifyItems,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        alignContent: props.alignContent
    };

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: [cssProps, styleProps.all]
        },
        props.children
    );
}

export default forwardRef(Grid);