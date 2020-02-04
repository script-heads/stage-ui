import WhaleTypes, { EmotionStyles } from '@flow-ui/whale/types'
import FlowTypes from '@flow-ui/core/types'

type Props = WhaleTypes.AllProps<HTMLDivElement, {}> & { decoration?: FlowTypes.LayoutDecoration }

const applyLayoutDecoration = (props: Props, theme: WhaleTypes.Theme) => {
    const decorations: { [key in FlowTypes.LayoutDecoration]: Object } = {
        surface: {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
        },
        minorShadow: {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.short
        },
        mediumShadow: {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.default
        },
        majorShadow: {
            background: theme.color.surface.css(),
            borderRadius: theme.radius.default,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.long
        },
        neumorphism: {
            background: theme.color.background.css(),
            borderRadius: theme.radius.default,
            boxShadow: `0.5rem 0.5rem 1rem ${theme.color.background.darken(0.8).css()},
                        -0.5rem -0.5rem 1rem ${theme.color.background.brighten(0.8).css()}`
        }
    }
    return decorations[props.decoration || 0]
}

export default applyLayoutDecoration