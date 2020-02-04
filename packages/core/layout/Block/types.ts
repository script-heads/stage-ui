import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'
import FlowTypes from '../../types'

declare namespace BlockTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
        decoration?: FlowTypes.LayoutDecoration
        children?: React.ReactNode
        overflow?: CSS.Properties['overflow']
    }

    interface Overrides {
        container: {
            decoration: FlowTypes.LayoutDecoration
        }
    }
}

export default BlockTypes