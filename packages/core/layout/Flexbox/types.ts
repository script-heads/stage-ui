import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'
import FlowTypes from '../../types'

declare namespace FlexboxTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        column?: boolean
        inline?: boolean
        decoration?: FlowTypes.LayoutDecoration
        alignItems?: CSS.Properties['alignItems']
        alignContent?: CSS.Properties['alignContent']
        justifyContent?: CSS.Properties['justifyContent']
        justifyItems?: CSS.Properties['justifyItems']
        direction?: CSS.Properties['flexDirection']
        wrap?: CSS.Properties['flexWrap']
        flow?: CSS.Properties['flexFlow']
        children?: React.ReactNode
    }

    interface Overrides {
        container: void
    }
}

export default FlexboxTypes