import CheckTypes from '../../basic/Check/types'

declare namespace SwitchTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type Classes = {
    /**
     * Switch container
     */
    check: {
      checked: Props['checked']
    }
    /**
     * Icon of Switch
     */
    switch: {
      checked: Props['checked']
    }
  } & Partial<CheckTypes.Classes>
}

export default SwitchTypes
