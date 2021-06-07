import CheckTypes from '@stage-ui/core/components/basic/Check/types'

declare namespace CheckboxTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type ClassState = {
    focus: boolean
    size: Props['size']
    checked: Props['checked']
    disabled: Props['disabled']
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
  }
}

export default CheckboxTypes
