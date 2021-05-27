import CheckTypes from '../../../misc/hocs/Check/types'

declare namespace SwitchTypes {
  interface Props extends CheckTypes.Props {}

  interface Styles extends CheckTypes.Styles {
    /**
     * Switch container
     */
    check: {
      checked: Props['checked']
      size: Props['size']
      disabled: Props['disabled']
    }
    /**
     * Icon of Switch
     */
    switch: {
      checked: Props['checked']
      size: Props['size']
      disabled: Props['disabled']
    }
  }
}

export default SwitchTypes
