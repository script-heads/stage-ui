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
                color: theme.color.primary.rgb().string(),
                borderColor: theme.color.lightest.rgb().string(),
                backgroundColor: theme.color.surface.rgb().string(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: theme.radius.s,
                transition: 'color .15s, borderColor .15s, backgroundColor .15s',
                willChange: 'color, borderColor, backgroundColor',
            },
            variant({
                focus: [{
                    borderColor: theme.color.primary.alpha(0.5).rgb().string()
                }]
            }),
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
                    borderColor: theme.color.lightest.rgb().string(),
                    backgroundColor: theme.color.lightest.rgb().string(),
                }],
            }),
        ],
        icon: (variant) => [
            {
                opacity: 0,
                transform: `scale(0.5)`,
                transition: 'opacity .15s, transform .15s',
                willChange: 'opacity, transform'
            },
            variant({
                size: {
                    xs: [{
                        fontSize: '0.5rem'
                    }],
                    s: [{
                        fontSize: '0.75rem'
                    }],
                    m: [{
                        fontSize: '1rem'
                    }],
                    l: [{
                        fontSize: '1.45rem'
                    }],
                    xl: [{
                        fontSize: '1.9rem'
                    }],
                },
                checked: [{
                    opacity: 1,
                    transform: `scale(1)`,
                }]
            }),
        ]
    }
}

export default styles