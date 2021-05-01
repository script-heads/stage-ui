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
            boxShadow: theme.assets.shadow.s
        }
        case 'mediumShadow': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            boxShadow: theme.assets.shadow.m
        }
        case 'majorShadow': return {
            background: theme.color.surface.rgb().string(),
            borderRadius: theme.radius.m,
            boxShadow: theme.assets.shadow.l
        }
    }

    return void 0
}

export default applyLayoutDecoration