import CheckTypes from '@stage-ui/core/basic/Check/types'

declare namespace CheckboxTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type ClassState = {
    checked: Props['checked']
  }

  type Classes = {
    /**
     * Checkbox container
     */
    check: ClassState
    /**
     * Icon of checkbox
     */
    icon: ClassState
  } & Partial<CheckTypes.Classes>
}

export default CheckboxTypes
