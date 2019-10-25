import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import callProp from '@flow-ui/core/misc/utils/callProp';
import chroma from 'chroma-js';
import Types from './types';
import Global from '../../types';

const buttonStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {

    const styleProps = useStyleProps(props);
    const color = chroma(callProp(props.color, theme.color) || theme.color.primary.css());

    return {
        container: (variant) => [
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

            variant({
                decoration: {
                    'outline': [{
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
                    }],
                    'text': [{
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
                    }],
                    'plain': [{
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
                    }],
                    'filled': [{
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
                    }]
                },
                shape: {
                    'rounded': [{
                        borderRadius: theme.radius.narrow
                    }],
                    'round': [{
                        borderRadius: '4rem'
                    }]
                },
                size: {
                    'xsmall': [{
                        padding: '0 .25rem',
                        minHeight: theme.assets.fieldHeight.xsmall,
                        ...theme.typography.caption[4]
                    }],
                    'small': [{
                        padding: '0 .5rem',
                        minHeight: theme.assets.fieldHeight.small,
                        ...theme.typography.caption[3]
                    }],
                    'medium': [{
                        padding: '0 .75rem',
                        minHeight: theme.assets.fieldHeight.medium,
                        ...theme.typography.caption[2]
                    }],
                    'large': [{
                        padding: '0 1rem',
                        minHeight: theme.assets.fieldHeight.large,
                        ...theme.typography.caption[1]
                    }],
                    'xlarge': [{
                        padding: '0 1.25rem',
                        minHeight: theme.assets.fieldHeight.xlarge,
                        fontSize: theme.typography.header[4].fontSize,
                        lineHeight: theme.typography.header[4].lineHeight
                    }]
                }
            }),

            styleProps.all,

            props.disabled && {
                cursor: 'not-allowed'
            },

            props.uppercase && {
                textTransform: 'uppercase'
            },
        ]
    }
}

export default buttonStyles