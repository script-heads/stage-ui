import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import Types from './types'
import Global from '../../types'

const BlockStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    const styleProps = useStyleProps(props)
    const surfaceVariants = {
        'minor': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.short
        }],
        'medium': [{
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

export default BlockStyles