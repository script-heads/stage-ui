import Global from '../../types';
import CSS from 'csstype';

declare namespace GridTypes {
    interface Props extends Global.Props {
        inline?: boolean
        template?: string
        templateColumns?: string
        templateRows?: string
        templateAreas?: string
        columnGap?: string
        rowGap?: string
        // gap?: string
        // placeItems?: string
        justifyItems?: 'start' | 'end' | 'center' | 'stretch'
        alignItems?: 'start' | 'end' | 'center' | 'stretch'
        // placeContent?: string
        justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
        alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
        autoColumns?: string
        autoRows?: string
        autoFlow?: 'row' | 'column' | 'row dense' | 'column dense'
        children?: React.ReactNode
        relative?: boolean
        overflow?: CSS.Properties["overflow"]
    }
}

export default GridTypes