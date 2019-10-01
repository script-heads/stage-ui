import useFlow from '../../misc/hooks/useFlow';
import useStyleProps from '../../misc/hooks/useStyleProps';
import callProp from '../../misc/utils/callProp';
import ButtonTypes from './types';
import chroma from 'chroma-js';
import variant from '../../misc/utils/variant';

export default (props: ButtonTypes.Props) => {

    const { theme } = useFlow();
    const styleProps = useStyleProps(props);
    const {
        decoration = 'filled',
        shape = 'rounded',
        size = 'medium'
    } = props;

    let color = chroma(callProp(props.color, theme.color) || theme.color.primary.css());
    const borderColor = callProp(props.borderColor, theme.color);
    const textColor = callProp(props.textColor, theme.color);

    return {
        container: [
            {
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                outline: 'none',
                boxShadow: 'unset',
                borderColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                background: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                userSelect: 'none',
                '&:active': {
                    borderStyle: 'solid'
                },
                '&::-moz-focus-inner': {
                    border: 0
                }
            },

            variant(decoration, {
                'outline': {
                    borderColor: color.alpha(.7).css(),
                    color: color.css(),
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&:disabled': {
                        borderColor: theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                },
                'text': {
                    color: color.css(),
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&:disabled': {
                        color: theme.color.light.css(),
                    }
                },
                'plain': {
                    borderColor: theme.assets.border.color,
                    background: theme.color.surface.css(),
                    color: theme.color.onSurface.css(),
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&:disabled': {
                        background: theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                },
                'filled': {
                    background: color.css(),
                    color: chroma.contrast(color, theme.color.onPrimary) > 3
                        ? theme.color.onPrimary.css()
                        : theme.color.onSurface.css(),
                    '&:hover:not([disabled])': {
                        background: color.get('hsl.l') > .2
                            ? color.darken(.6).css()
                            : color.brighten(1.5).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.get('hsl.l') > .2
                            ? color.darken(.2).css()
                            : color.brighten(.75).css(),
                    },
                    '&:disabled': {
                        background: theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                }
            }),

            variant(shape, {
                'rounded': {
                    borderRadius: theme.radius.narrow
                },
                'round': {
                    borderRadius: '4rem'
                }
            }),

            variant(size, {
                'xsmall': {
                    padding: '0 .25rem',
                    height: theme.assets.fieldHeight.xsmall,
                    ...theme.typography.caption[4]
                },
                'small': {
                    padding: '0 .5rem',
                    height: theme.assets.fieldHeight.small,
                    ...theme.typography.caption[3]
                },
                'medium': {
                    padding: '0 .75rem',
                    height: theme.assets.fieldHeight.medium,
                    ...theme.typography.caption[2]
                },
                'large': {
                    padding: '0 1rem',
                    height: theme.assets.fieldHeight.large,
                    ...theme.typography.caption[1]
                },
                'xlarge': {
                    padding: '0 1.25rem',
                    height: theme.assets.fieldHeight.xlarge,
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight
                }
            }),

            styleProps.all,

            props.disabled && {
                cursor: 'not-allowed'
            },

            props.uppercase && {
                textTransform: 'uppercase'
            },

            {
                borderColor: borderColor && borderColor,
                color: textColor && textColor
            },
            props.animated && {
                transition: "all .15s"
            }
        ]
    }
}