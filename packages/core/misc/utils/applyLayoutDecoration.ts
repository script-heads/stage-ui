import SystemTypes from '@stage-ui/system/types'

export type LayoutDecoration =
    'surface'
    | 'minorShadow'
    | 'mediumShadow'
    | 'majorShadow'
    | 'neumorphism'

type Props = SystemTypes.AllProps<HTMLDivElement, {}> & { decoration?: LayoutDecoration }

const applyLayoutDecoration = (props: Props, theme: SystemTypes.Theme) => {

    switch (props.decoration) {
        case 'surface': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
        }
        case 'minorShadow': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.short
        }
        case 'mediumShadow': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.default
        }
        case 'majorShadow': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            boxShadow: theme.assets.shadow.long
        }
        case 'neumorphism':
            const isDark = theme.color.background.isDark()
            return {
                background: theme.color.background.rgb().string(),
                borderRadius: theme.radius.m,
                boxShadow: `0.5rem 0.5rem 1rem ${theme.color.background.darken(isDark ? 0.8 : 0.4).rgb().string()},
                            -0.5rem -0.5rem 1rem ${theme.color.background.lighten(isDark ? 0.4 : 0.8).rgb().string()}`
            }
    }

    return void 0
}

export default applyLayoutDecoration