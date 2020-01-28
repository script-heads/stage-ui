import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    const surfaceVariants = {
        'minor': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.short
        }],
        'm': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.default
        }],
        'major': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.long
        }]
    }

    return {
        container: (variant) => [
            {
                position: 'relative',
                '&:hover': variant({ hoverSurface: surfaceVariants }),
                overflow: props.overflow
            },
            variant({ surface: surfaceVariants }),
            styleProps.all
        ]
    }
}

export default styles