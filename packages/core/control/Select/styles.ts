import { css } from '@emotion/core';
import SelectTypes from './types';
import useFlow from '../../misc/hooks/useFlow';
import variant from '../../misc/utils/variant';
import callProp from '../../misc/utils/callProp';

export default (props: SelectTypes.Props) => {
    const { size = 'medium', shape = 'rounded', decoration = 'outline' } = props;
    const { theme } = useFlow();
    const overrides = theme.overrides.select;
    let color = callProp(props.color, theme.color);
    let backgroundColor = callProp(props.backgroundColor, theme.color);

    const multilineAdditionalPadding = variant(size, {
        'medium': '.25rem',
        'large': '.25rem',
        'xlarge': '.5rem'
    })

    const shapeStyles = variant(shape, {
        'rounded': {
            borderRadius: theme.radius.narrow
        },
        'round': {
            borderRadius: '4rem'
        }
    });

    return {
        fieldStyles: (open) => css(
            open && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }
        ),

        placeholder: css({
            color: theme.color.light.css(),
            userSelect: 'none',
            cursor: 'pointer'
        }),

        input: css({
            outline: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            font: 'inherit',
            color: 'inherit',
            cursor: 'inherit',
            flex: 1,
            '&::placeholder': {
                color: theme.color.light.css()
            }
        }),

        options: (empty) => css({
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '-.25rem',
            marginRight: '-.25rem',
            padding: multilineAdditionalPadding,
            '> *': {
                marginBottom: '.25rem !important',
                marginRight: '.25rem',
            }
        }),

        optionItem: css(
            {
                display: 'flex',
                alignItems: 'center',
                borderWidth: '1px',
                height: 'fit-content',
                borderStyle: 'solid',
                borderColor: theme.color.primary.alpha(.5).css(),
                background: theme.color.primary.alpha(.1).css(),
                color: theme.color.primary.css(),
                overflow: 'hidden',
            },
            variant(shape, {
                'rounded': {
                    borderRadius: '2px',
                },
                'round': {
                    borderRadius: '100%',
                }
            })
        ),

        optionItemText: css(
            {
                minHeight: '100%',
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.color.primary.alpha(.5).css(),
                alignText: 'center'
            },
            variant(size, {
                'xsmall': {
                    padding: '.125rem .25rem',
                    ...theme.typography.caption[4]
                },
                'small': {
                    padding: '.125rem .25rem',
                    ...theme.typography.caption[3],
                },
                'medium': {
                    padding: '.125rem .25rem',
                    ...theme.typography.caption[2],
                },
                'large': {
                    padding: '.125rem .25rem',
                    ...theme.typography.caption[1],
                },
                'xlarge': {
                    padding: '.125rem .25rem',
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                }
            }),
        ),

        dropMenu: css(
            {
                overflow: 'auto',
                maxHeight: '10rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: theme.color.primary.css(),
                borderTop: 'none',
                background: backgroundColor || theme.color.surface.css(),
                ...shapeStyles,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            },
            variant(decoration, {
                'outline': {
                },
                'filled': {
                    borderColor: 'transparent',
                },
                'underline': {
                    borderColor: 'transparent',
                    paddingLeft: 0,
                    paddingRight: 0,
                },
                'none': {
                    borderColor: 'transparent',
                }
            }),
            {
                borderColor: color
            },
            overrides && overrides.dropMenu
        ),

        dropItem: (underCursor: boolean) => css(
            {
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                height: 'fit-content',

            },
            underCursor ?
                {
                    background: theme.color.primary.css()
                }
                : {
                    ':hover': {
                        background: theme.color.background.css()
                    }
                },
            overrides && overrides.dropItem
        ),

        insideLabelStyles: {
            marginLeft: multilineAdditionalPadding,
            marginTop: multilineAdditionalPadding
        }
    }
}