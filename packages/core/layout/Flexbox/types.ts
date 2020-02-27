import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace FlexboxTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        column?: boolean
        inline?: boolean
        decoration?: LayoutDecoration
        
        alignItems?: WhaleTypes.FlexSelf
        /**
         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        alignContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        /**
         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        placeContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        /**
         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        justifyContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        /**
         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        justifyItems?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace
        direction?: WhaleTypes.FlexDirection
        wrap?: WhaleTypes.FlexWrap
        /**
         * Short for direction and wrap
         */
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