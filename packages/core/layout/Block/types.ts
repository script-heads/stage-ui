import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace BlockTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
        decoration?: LayoutDecoration
        children?: React.ReactNode
        overflow?: CSS.Properties['overflow']
    }

    interface Overrides {
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default BlockTypes