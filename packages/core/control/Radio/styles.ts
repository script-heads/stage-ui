import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import checkStyles from '@flow-ui/core/misc/hocs/Check/styles'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    
    return {
        ...checkStyles(props, theme),
        check: (variant) => [
            {
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.color.surface.rgb().string(),
                backgroundColor: theme.color.surface.rgb().string(),
                borderColor: theme.color.primary.rgb().string(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: '50%',
                transition: 'color .15s, borderColor .15s, backgroundColor .15s',
                willChange: 'color, borderColor, backgroundColor',
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
                disabled: [{
                    color: theme.color.hardest.rgb().string(),
                    backgroundColor: theme.color.lightest.rgb().string(),
                    borderColor: theme.color.lightest.rgb().string()
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
                borderColor: theme.color.surface.rgb().string(),
                backgroundColor: theme.color.primary.rgb().string(),
                boxShadow: theme.assets.shadow.default,
            },
            variant({
                checked: [{
                    transform: `scale(1)`,
                    opacity: 1,
                    transition: 'opacity .15s, transform .15s',
                    willChange: 'opacity, transform'
                }],
                size: {
                    xs: [{borderWidth: '0.1rem'}],
                    s: [{borderWidth: '0.125rem'}],
                    m: [{borderWidth: '0.25rem'}],
                    l: [{borderWidth: '0.25rem'}],
                    xl: [{borderWidth: '0.375rem'}],
                },
                disabled: [{
                    borderColor: theme.color.lightest.rgb().string(),
                    boxShadow: 'none',
                }]
            })
            
        ]
    }
}

export default styles