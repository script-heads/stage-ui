import CheckTypes from '../../basic/Check/types'

declare namespace RadioTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type ClassState = {
    checked: Props['checked']
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
  } & Partial<CheckTypes.Classes>
}

export default RadioTypes
