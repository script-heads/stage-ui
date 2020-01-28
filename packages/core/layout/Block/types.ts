import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace BlockTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
        surface?: 'major' | 'medium' | 'minor'
        hoverSurface?: 'major' | 'medium' | 'minor'
        children?: React.ReactNode
        background?: WhaleTypes.ColorProp
        color?: WhaleTypes.ColorProp
        overflow?: CSS.Properties['overflow']
    }

    interface Overrides {
        container: {
            surface: Props['surface']
            hoverSurface: Props['hoverSurface']
        }
    }
}

export default BlockTypes