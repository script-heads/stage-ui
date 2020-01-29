import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import checkStyles from '@flow-ui/core/misc/hocs/Check/styles'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    return {
        ...checkStyles(props, theme),
        check: (variant) => [
            {
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.color.surface.css(),
                backgroundColor: theme.color.surface.css(),
                borderColor: theme.color.primary.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: '50%'
            },
            variant({
                size: {
                    xs: [{
                        width: '0.75rem',
                        height: '0.75rem'
                    }],
                    s: [{
                        width: '1rem',
                        height: '1rem'
                    }],
                    m: [{
                        width: '1.25rem',
                        height: '1.25rem'
                    }],
                    l: [{
                        width: '1.5rem',
                        height: '1.5rem'
                    }],
                    xl: [{
                        width: '2rem',
                        height: '2rem'
                    }],
                },
                animated: [{
                    transition: 'all .15s'
                }],
                disabled: [{
                    color: theme.color.hardest.css(),
                    backgroundColor: theme.color.lightest.css(),
                    borderColor: theme.color.lightest.css()
                }]
            }),
            
        ],
        radio: (variant) => [
            {
                transition: 'all 0.2s',
                transform: `scale(0.5)`,
                opacity: 0,
                boxSizing: 'border-box',
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                borderWidth: '0.25rem',
                borderStyle: 'solid',
                borderColor: theme.color.surface.css(),
                backgroundColor: theme.color.primary.css(),
                boxShadow: theme.assets.shadow.default,
            },
            variant({
                checked: [{
                    transform: `scale(1)`,
                    opacity: 1,
                }],
                size: {
                    xs: [{borderWidth: '0.1rem'}],
                    s: [{borderWidth: '0.125rem'}],
                    m: [{borderWidth: '0.25rem'}],
                    l: [{borderWidth: '0.25rem'}],
                    xl: [{borderWidth: '0.375rem'}],
                },
                animated: [{
                    transition: 'all .15s'
                }],
                disabled: [{
                    borderColor: theme.color.lightest.css(),
                    boxShadow: 'none',
                }]
            })
            
        ]
    }
}

export default styles