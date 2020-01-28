import callProp from '@flow-ui/core/misc/utils/callProp'
import variant from '@flow-ui/core/misc/utils/variant'
import Types from './types'
import fieldStyles from '../../misc/hocs/Field/styles'
import { StyleObject } from '@flow-ui/whale/types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    const { 
        size = 'medium', 
        multiselect
    } = props
    
    let color = callProp(props.color, theme.color)
    let backgroundColor = callProp(props.backgroundColor, theme.color)

    const multiselectAdditionalPadding = variant(size, {
        'medium': '.25rem',
        'large': '.25rem',
        'xlarge': '.5rem'
    })

    return {
        ...fieldStyles<Types.Overrides>(props, theme, styleProps, {
            manyLines: multiselect,
            additionalPadding: multiselect ? multiselectAdditionalPadding : '',
            labelOverlayPosition: 'center',
            overrides: {
                field: (variant) => [
                    variant({
                        open: [{
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: theme.radius.narrow,
                            borderTopLeftRadius: theme.radius.narrow,
                        }]
                    })
                ]
            }
        }),

        placeholder: [{
            color: theme.color.light.css(),
            userSelect: 'none',
            cursor: 'pointer',
            padding: multiselectAdditionalPadding,
        }],

        input:[{
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
        }],

        options: [{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '-.25rem',
            marginRight: '-.25rem',
            padding: multiselectAdditionalPadding,
            '> *': {
                marginBottom: '.25rem !important',
                marginRight: '.25rem',
            }
        }],

        optionItem: [
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
            }
        ],

        optionItemText: [
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
                    ...theme.typography.text[4]
                },
                'small': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text[3],
                },
                'medium': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text[2],
                },
                'large': {
                    padding: '.125rem .25rem',
                    ...theme.typography.text[1],
                },
                'xlarge': {
                    padding: '.125rem .25rem',
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                }
            }),
        ],

        dropMenu: (variant) => [
            {
                overflow: 'auto',
                maxHeight: '10rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: theme.color.lightest.css(),
                borderTop: 'none',
                background: backgroundColor || theme.color.surface.css(),
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            },
            variant({
                shape: {
                    rounded: [{
                        borderRadius: theme.radius.narrow
                    }],
                    round: [
                        {
                            borderRadius: '4rem'
                        },
                        variant({
                            open: [{
                                borderBottomRightRadius: theme.radius.narrow,
                                borderBottomLeftRadius: theme.radius.narrow,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            }]
                        })
                    ]
                },
                decoration: {
                    'filled': [{
                        borderColor: 'transparent',
                    }],
                    'underline': [{
                        borderColor: 'transparent',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }],
                    'none': [{
                        borderColor: 'transparent',
                    }]
                },
                focus: [{
                    borderColor: theme.color.primary.css(),
                }],
                open: [
                    
                ]
            }),
            {
                borderColor: color
            }
        ],

        dropItem: (variant) =>[
            {
                cursor: 'pointer',
                padding: '0.5rem 0.75rem',
                height: 'fit-content',
                ':hover': {
                    background: theme.color.background.css()
                }
            },
            variant({
                size: {
                    'xsmall': [theme.typography.text[3]],
                    'small': [theme.typography.text[2]],
                    'medium': [theme.typography.text[1]],
                    'large': [{
                        fontSize: theme.typography.header[4].fontSize,
                        lineHeight: theme.typography.header[4].lineHeight,
                    }],
                    'xlarge': [{
                        fontSize: theme.typography.header[4].fontSize,
                        lineHeight: theme.typography.header[4].lineHeight,
                    }]
                },
                underCursor: [{
                    background: theme.color.primary.css(),
                    color: theme.color.onPrimary.css(),
                    ':hover': {
                        background: theme.color.primary.css()
                    }
                }]
            })
        ],
    }
}

export default styles