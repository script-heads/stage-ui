import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace GridTypes {
    interface Props extends WhaleTypes.GridContainerProps, WhaleTypes.AllProps<HTMLDivElement, Styles> {
        inline?: boolean
        children?: React.ReactNode
        decoration?: LayoutDecoration

        /**
         * @displayType string
         * @deprecated
         */
        templateColumns?: CSS.Properties['gridTemplateColumns']
        /**
         * @displayType string
         * @deprecated
         */
        templateRows?: CSS.Properties['gridTemplateRows']
        /**
         * @displayType string
         * @deprecated
         */
        templateAreas?: CSS.Properties['gridTemplateAreas']
        /**
         * @displayType string
         * @deprecated
         */
        columnGap?: CSS.Properties['gridColumnGap']
        /**
         * @displayType string
         * @deprecated
         */
        rowGap?: CSS.Properties['gridRowGap']
        /**
         * @displayType string
         * @deprecated
         */
        gap?: CSS.Properties['gridGap']
        /**
         * @displayType string
         * @deprecated
         */
        autoColumns?: CSS.Properties['gridAutoColumns']
        /**
         * @displayType string
         * @deprecated
         */
        autoRows?: CSS.Properties['gridAutoRows']
        /**
         * @displayType string
         * @deprecated
         */
        autoFlow?: CSS.Properties['gridAutoFlow']
    }
    interface Styles {
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default GridTypes