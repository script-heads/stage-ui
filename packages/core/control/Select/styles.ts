import { css } from '@emotion/core';
import SelectTypes from './types';
import useFlow from '../../misc/hooks/useFlow';
import variant from '../../misc/utils/variant';

export default (props: SelectTypes.Props) => {
    const { size = 'medium', shape = 'rounded' } = props;
    const { theme } = useFlow();
    const overrides = theme.overrides.select;

    const multilineAdditionalPadding = variant(size, {
        'medium': '.25rem',
        'large': '.25rem',
        'xlarge': '.5rem'
    })

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
            resize: 'vertical',
            boxShadow: 'none',
            font: 'inherit',
            cursor: 'inherit',
            flex: 1
        }),

        options: css({
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '-.25rem',
            marginRight: '-.25rem',
            padding: multilineAdditionalPadding,
            '> *': {
                marginTop: '.25rem !important',
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
                position: 'absolute',
                overflow: 'auto',
                left: '-1px',
                right: '-1px',
                top: '100%',
                background: 'inherit',
                maxHeight: '10rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'inherit',
                borderTop: 'none',
                borderBottomLeftRadius: theme.radius.narrow,
                borderBottomRightRadius: theme.radius.narrow,
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