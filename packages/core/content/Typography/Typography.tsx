import { jsx } from '@emotion/core';
import useStyleProps from '../../misc/hooks/useStyleProps';
import useContainer from '../../misc/hooks/useContainer';
import Types from './types';
import { forwardRef } from 'react';
import callProp from '../../misc/utils/callProp';

const Typography = (props: Types.Props, ref) => {

    const styleProps = useStyleProps(props);
    const { attributes } = useContainer(props);

    const data = props.quotes && typeof props.children === 'string'
        ? props.children.replace(/"([^"]*)"/g, '«$1»')
        : props.children;

    return jsx(
        props.tag,
        {
            ref: ref,
            ...attributes,
            css: [
                props.defaultStyles,
                {
                    fontSize: props.size,
                    fontWeight: props.weight,
                    textDecoration: props.decoration,
                    textTransform: props.transform,
                    textAlign: props.align,
                    color: callProp(props.color, props.theme.color),
                    background: callProp(props.background, props.theme.color),
                },
                props.ellipsis && {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                },
                styleProps.all,
                props.animated && {
                    transition: "all .15s"
                }
            ],
            download: props.download,
            href: props.href,
            hrefLang: props.hrefLang,
            media: props.media,
            ping: props.ping,
            rel: props.rel,
            target: props.target,
            type: props.type,
            referrerPolicy: props.referrerPolicy,
        },
        data
    );
}

export default forwardRef(Typography);