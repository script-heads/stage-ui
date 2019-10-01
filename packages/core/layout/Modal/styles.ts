import { css } from '@emotion/core';
import ModalTypes from './types';
import useFlow from '../../misc/hooks/useFlow';
import useStyleProps from '../../misc/hooks/useStyleProps';

export default (props: ModalTypes.Props) => {
    const { theme } = useFlow();
    const { all: styleProps } = useStyleProps(props);
    const overrides = theme.overrides.modal;

    return {
        overlay: (visible, center) => css(
            {
                opacity: visible ? 1 : 0,
                zIndex: 500,
                position: 'fixed',
                width: "100%",
                height: "100%",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,.5)",
                display: center ? "flex" : "block",
                justifyContent: "center",
                alignItems: "center",
                overflowY: 'auto',
                backdropFilter: "blur(4px)",
                transition: 'opacity 0.25s',
                backfaceVisibility: "hidden",
            },
            overrides && overrides.overlay
        ),
        window: (visible, center, fullSize) => css(
            {
                opacity: visible ? 1 : 0,
                zIndex: 500,
                backgroundColor: theme.color.backgroundVariant.css(),
                minHeight: '1rem',
                minWidth: '15rem',
                maxWidth: '40rem',
                padding: '2.25rem',
                margin: '0 auto',
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.default,
                transition: 'all 0.5s',
                transform: visible ? 'translateY(0)' : 'translateY(-20px)',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'relative'
            }, (center && fullSize) && {
                width: '40rem'
            },
            styleProps,
            overrides && overrides.window,
        ),

        header: css(
            {
                marginTop: '-0.25rem',
                lineHeight: '2.375rem'
            },
            overrides && overrides.header
        ),

        cross: css(
            {
                marginTop: '-0.25rem',
                marginLeft: '2rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
                transform: "scale(1)",
                opacity: .7,
                ':hover': {
                    transform: "scale(1.1)"
                },
                ':active': {
                    transform: "scale(1)"
                }
            },
            overrides && overrides.cross
        )
    }
}