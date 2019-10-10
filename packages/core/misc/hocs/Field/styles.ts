import useFlow from '../../hooks/useFlow';
import useStyleProps from '../../hooks/useStyleProps';
import callProp from '../../utils/callProp';
import FieldTypes from './types';
import variant from '../../utils/variant';
import css from '@emotion/css';

export default (props: FieldTypes.Props) => {

    const {
        decoration = 'outline',
        shape = 'rounded',
        size = 'medium',
        overlayLabelAlign = 'bottoms',
        fieldStyles,
        label,
        cursor = 'pointer',
        manyLines
    } = props;
    const { theme } = useFlow();
    const styleProps = useStyleProps(props);
    let color = callProp(props.color, theme.color);
    let backgroundColor = callProp(props.backgroundColor, theme.color);

    const shapeStyles = variant(shape, {
        'rounded': {
            borderRadius: theme.radius.narrow
        },
        'round': {
            borderRadius: '4rem'
        }
    });

    const labelSizes = {
        padding: '.25rem',
        font: theme.typography.caption[3],
        ...variant(size, {
            'small': {
                padding: '2px',
                font: theme.typography.caption[4]
            },
            'xsmall': {
                padding: '2px',
                font: theme.typography.caption[4]
            },
        })
    }

    const headingLabelHeight = `calc(${labelSizes.font.lineHeight} + ${labelSizes.padding})`

    return {
        container: css(
            {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor,
                outline: 'none'
            },
            styleProps.flow,
            props.animated && {
                transition: "all .15s"
            }
        ),
        field: (focus) => css(
            {
                position: 'relative',
                flexShrink: 0,
                flexGrow: 1,
                background: theme.color.surface.css(),
                flexBasis: theme.assets.fieldHeight[size],
                borderColor: theme.color.lightest.css(),
                outline: 'none',
                padding: '.25rem',
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
                '&[disabled]': {
                    color: theme.color.light.css(),
                    cursor: 'not-allowed'
                },
            },
            variant(size, {
                'xsmall': {
                    ...theme.typography.caption[3],
                    padding: !manyLines && '.25rem .375rem'
                },
                'small': {
                    ...theme.typography.caption[2],
                    padding: !manyLines && '.25rem .5rem'
                },
                'medium': {
                    ...theme.typography.caption[1],
                    padding: !manyLines && '.25rem .75rem'
                },
                'large': {
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                    padding: !manyLines && '.25rem .875rem'
                },
                'xlarge': {
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                    padding: !manyLines && '.25rem .875rem'
                }
            }),
            variant(decoration, {
                'outline': {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    ...shapeStyles,
                    '&[disabled]': {
                        background: theme.color.lightest.css(),
                    }
                },
                'filled': {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                    '&[disabled]': {
                        background: theme.color.lightest.css(),
                    },
                    ...shapeStyles
                },
                'underline': {
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    background: 'transparent',
                    paddingLeft: 0,
                    paddingRight: 0,
                },
                'none': {
                    background: 'transparent',
                }
            }),
            fieldStyles,
            focus && {
                borderColor: theme.color.primary.css()
            },
            {
                borderColor: color,
                background: backgroundColor,
            },
            styleProps.self,
            props.animated && {
                transition: "all .15s"
            },
        ),

        content: (isLabelOverlay) => css(
            {
                display: 'flex',
                flexBasis: '12rem',
                flexGrow: 1,
                flexShrink: 1,
                borderColor: 'inherit',
                background: 'inherit',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            label && isLabelOverlay && {
                paddingTop: headingLabelHeight,
            },
            props.animated && {
                transition: "all .15s"
            }
        ),

        label: (isLabelOutside, isLabelOverlay) => css(
            {
                color: theme.color.hard.css(),
            },
            label && isLabelOutside && [
                {
                    paddingBottom: '.25rem',
                    paddingLeft: '.25rem',
                }
            ],
            label && isLabelOverlay
                ? [
                    {
                        position: 'absolute',
                        height: theme.assets.fieldHeight[size],
                        display: 'flex',
                        userSelect: 'none',
                    },
                    overlayLabelAlign === 'top'
                        ? {
                            top: 0,
                            paddingTop: headingLabelHeight
                        }
                        : {
                            bottom: 0,
                            alignItems: 'center',
                        }
                ]
                : {
                    paddingBottom: labelSizes.padding,
                    ...labelSizes.font
                },
            label && !isLabelOutside && props.insideLabelStyles,
            props.animated && {
                transition: "all .15s"
            }
        ),

        child: (align) => [
            {
                color: color || theme.color.light.css(),
                flexGrow: 0,
                flexShrink: 1,
                display: 'flex',
                alignItems: 'center',
                [align === 'right' ? 'marginLeft' : 'marginRight']: variant(size, {
                    'xsmall': '.25rem',
                    'small': '.25rem',
                    'medium': '.5rem',
                    'large': '.5rem',
                    'xlarge': '.75rem',
                })
            },
            props.animated && {
                transition: "all .15s"
            }
        ],

        hint: {
            paddingTop: '.25rem',
            paddingLeft: decoration != 'underline' && '.25rem',
            ...labelSizes.font,
            color: color || theme.color.hard.css(),
        }
    }
}