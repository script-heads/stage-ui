import WhaleTypes from '@flow-ui/whale/types'
import Menu from './'
declare namespace MenuTypes {

    type MenuValue = string | number
    type MenuDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
    type MenuDecoration = 'filled' | 'color' | 'marker' | 'marker-reverse' 
    type MenuAlign = 'flex-start' | 'flex-end' | 'stretch' | 'center'
    type MenuShape = 'square' | 'rounded' | 'round'

    interface Context { 
        values: Record<string, () => void>
        current?: MenuValue
        controlled?: boolean
        onChange?: (value?: MenuValue) => void
    }
    
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {

        defaultValue?: MenuValue
        value?: MenuValue
        data?: React.ReactNode[]
        onChange?: (value?: MenuValue) => void
        column?: boolean
        decoration?: MenuDecoration
        direction?: MenuDirection
        shape?: MenuShape
        size?: WhaleTypes.Size
        align?: MenuAlign
        
        children?: React.ReactNode
    }
    interface StyleState {
        decoration: Props['decoration']
    }
    interface Overrides {
        container: StyleState
        item: StyleState
        group: StyleState
        groupTitle: StyleState
        subMenu: StyleState
        subMenuContent: StyleState
        subMenuArrow: StyleState
        leftChild: StyleState
        middleChild: StyleState
        rightChild: StyleState
    }
}

export default MenuTypes