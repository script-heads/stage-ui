import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace GridTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        inline?: boolean
        children?: React.ReactNode
        decoration?: LayoutDecoration
        /**
         * @displayType string
         */
        templateColumns?: CSS.Properties['gridTemplateColumns']
        /**
         * @displayType string
         */
        templateRows?: CSS.Properties['gridTemplateRows']
        /**
         * @displayType string
         */
        templateAreas?: CSS.Properties['gridTemplateAreas']

        /**
         * @displayType string
         */
        columnGap?: CSS.Properties['gridColumnGap']
        /**
         * @displayType string
         */
        rowGap?: CSS.Properties['gridRowGap']
        /**
         * @displayType string
         */
        gap?: CSS.Properties['gridGap']

        /**
         * @displayType string
         */
        autoColumns?: CSS.Properties['gridAutoColumns']
        /**
         * @displayType string
         */
        autoRows?: CSS.Properties['gridAutoRows']
        /**
         * @displayType string
         */
        autoFlow?: CSS.Properties['gridAutoFlow']

        /**
         * @displayType string
         */
        alignItems?: WhaleTypes.GridSelf
        /**
         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         */
        alignContent?: WhaleTypes.GridSpace | WhaleTypes.GridSelf
        /**
         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         */
        justifyContent?: WhaleTypes.GridSpace | WhaleTypes.GridSelf
        /**
         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         */
        justifyItems?: WhaleTypes.GridSpace | WhaleTypes.GridSelf
    }
    interface Overrides {
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default GridTypes