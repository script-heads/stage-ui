import CheckTypes from '../../basic/Check/types'

declare namespace RadioTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type ClassState = {
    checked: Props['checked']
    size: Props['size']
    disabled: Props['disabled']
    focus: boolean
  }

  type Classes = {
    /**
     * Radio container
     */
    check: ClassState
    /**
     * Icon of Radio
     */
    radio: ClassState
  }
}

export default RadioTypes
