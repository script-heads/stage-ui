import CheckboxTypes from '../Checkbox/types'

declare namespace SwitchTypes {
  type Shape = 'square' | 'rounded' | 'round'

  type Props = CheckboxTypes.Props & {
    /**
     * Shape of switch
     * @default round
     */
    shape?: Shape
    /**
     * Color of switch
     */
    color?: Stage.ColorProp
    /**
     * Place icon to child
     */
    iconChild?: React.ReactNode
  }
  type ClassState = CheckboxTypes.Props
  type Classes = CheckboxTypes.Classes
}

export default SwitchTypes
