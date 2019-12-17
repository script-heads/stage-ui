import Shared from '@flow-ui/core/types'
import CSS from 'csstype'

declare namespace BlockTypes {
    interface Props extends Shared.AllProps {
        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
        surface?: 'major' | 'medium' | 'minor'
        hoverSurface?: 'major' | 'medium' | 'minor'
        children?: React.ReactNode
        background?: Shared.ColorProp
        color?: Shared.ColorProp
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