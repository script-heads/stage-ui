import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace FlexboxTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        column?: boolean
        inline?: boolean
        decoration?: LayoutDecoration
        alignItems?: WhaleTypes.FlexSelf
        alignContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        placeContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        justifyContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        justifyItems?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        direction?: CSS.Properties['flexDirection']
        wrap?: CSS.Properties['flexWrap']
        flow?: CSS.Properties['flexFlow']
        children?: React.ReactNode
    }

    interface Overrides {
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default FlexboxTypes