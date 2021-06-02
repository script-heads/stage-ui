import CheckTypes from '@stage-ui/core/misc/hocs/Check/types'

declare namespace CheckboxTypes {
  interface Props extends CheckTypes.Props {}

  interface StyleState {
    focus: boolean
    size: Props['size']
    checked: Props['checked']
    disabled: Props['disabled']
  }
  interface Styles extends CheckTypes.Styles {
    /**
     * Checkbox container
     */
    check: StyleState
    /**
     * Icon of checkbox
     */
    icon: StyleState
  }
}

export default CheckboxTypes
