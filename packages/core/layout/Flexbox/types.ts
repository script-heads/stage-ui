import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

type D = WhaleTypes.AllProps<HTMLDivElement, {}>

declare namespace FlexboxTypes {
    interface Props extends WhaleTypes.FlexboxContainerProps, WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        column?: boolean
        inline?: boolean
        decoration?: LayoutDecoration
        children?: React.ReactNode
    }

    interface Overrides {
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default FlexboxTypes