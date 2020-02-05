import WhaleTypes from '@flow-ui/whale/types'
import FlexboxTypes from '@flow-ui/core/layout/Flexbox/types'

declare namespace BlockTypes {
    interface Props extends FlexboxTypes.Props {
        
    }

    interface Overrides {
        container: void
    }
}

export default BlockTypes