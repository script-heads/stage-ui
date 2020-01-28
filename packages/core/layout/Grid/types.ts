import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace GridTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        inline?: boolean
        children?: React.ReactNode

        templateColumns?: CSS.Properties['gridTemplateColumns']
        templateRows?: CSS.Properties['gridTemplateRows']
        templateAreas?: CSS.Properties['gridTemplateAreas']

        columnGap?: CSS.Properties['gridColumnGap']
        rowGap?: CSS.Properties['gridRowGap']
        gap?: CSS.Properties['gridGap']

        autoColumns?: CSS.Properties['gridAutoColumns']
        autoRows?: CSS.Properties['gridAutoRows']
        autoFlow?: CSS.Properties['gridAutoFlow']

        alignItems?: CSS.Properties['alignItems']
        alignContent?: CSS.Properties['alignContent']
        justifyContent?: CSS.Properties['justifyContent']
        justifyItems?: CSS.Properties['justifyItems']
    }
    interface Overrides {
        container: void
    }
}

export default GridTypes