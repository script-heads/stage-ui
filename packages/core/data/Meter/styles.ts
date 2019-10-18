import { css } from '@emotion/core';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import callProp from '@flow-ui/core/misc/utils/callProp';
import variant from '@flow-ui/core/misc/utils/variant';
import chroma from 'chroma-js';
import MeterTypes from './types';

export default (props: MeterTypes.Props, percent: number) => {

    const {
        decoration = 'filled',
        shape = 'round',
        size = 'medium',
        animation,
    } = props;

    const { theme } = useFlow();
    const styleProps = useStyleProps(props);

    let color = chroma(callProp(props.color, theme.color) || theme.color.primary.css());

    return {
        container: css(
            {
                minWidth: "1rem",
                alignSelf: "center",
                userSelect: 'none',
                overflow: "hidden",
                boxSizing: "border-box",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: theme.color.lightest.css(),
                background: theme.color.surface.css(),
            },
            variant(shape, {
                'round': {
                    borderRadius: '100rem',
                }
            }),
            variant(size, {
                'xsmall': {
                    height: "0.25rem",
                },
                'small': {
                    height: "0.5rem",
                },
                'medium': {
                    height: "0.75rem",
                },
                'large': {
                    height: "1rem",
                },
                'xlarge': {
                    height: "1.25rem",
                }
            }),
            variant(decoration, {
                'outline': {
                    background: "transparent",
                    borderColor: theme.color.primary.css(),

                    ...variant(size, {
                        'xsmall': {
                            padding: "0rem",
                        },
                        'small': {
                            padding: "0.05rem",
                            paddingLeft: "0.1rem",
                            paddingRight: "0.1rem",
                        },
                        'medium': {
                            padding: "0.15rem",
                        },
                        'large': {
                            padding: "0.2rem",
                        },
                        'xlarge': {
                            padding: "0.2rem",
                        }
                    }),
                },
            }),
            styleProps.all,
        ),
        thumb: css(
            {
                height: "100%",
                background: color.css(),
                animation: animation ? "move 2s linear infinite" : "none",
                position: "relative",
                '&:after': animation && {
                    content: `''`,
                    position: "absolute",
                    top: "0; left: 0; bottom: 0; right: 0",
                    backgroundImage: `linear-gradient(
                        -45deg, 
                        rgba(255, 255, 255, .2) 25%, 
                        transparent 25%, 
                        transparent 50%, 
                        rgba(255, 255, 255, .2) 50%, 
                        rgba(255, 255, 255, .2) 75%, 
                        transparent 75%, 
                        transparent
                    )`,
                    zIndex: 1,
                    backgroundSize: variant(size, {
                        'xsmall': "0.5rem 0.5rem",
                        'small': "1rem 1rem",
                        'medium': "2rem 2rem",
                        'large': "3rem 3rem",
                        'xlarge': "4rem 4rem",
                    }),
                    animation: "move 2s linear infinite",
                    overflow: "hidden",
                },
                '@keyframes move': {
                    '0%': {
                        backgroundposition: "0 0"
                    },
                    '100%': {
                        backgroundPosition: "2rem 2rem"
                    }
                }
            },
            variant(shape, {
                'round': {
                    borderRadius: '4rem'
                }
            }),
        )
    }
}