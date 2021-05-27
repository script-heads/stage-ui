import { Sizes } from '@stage-ui/system'
import { Classes } from '@stage-ui/system/hooks/useSystem'
import { ColorProp } from '@stage-ui/system/props/color'
import { AllProps } from '@stage-ui/system/props/types'

declare namespace CheckTypes {
  type CheckType = 'checkbox' | 'radio' | 'switch'

  interface Props extends AllProps<HTMLInputElement, Styles> {
    label?: string
    labelColor?: ColorProp
    checked?: boolean
    disabled?: boolean
    defaultValue?: boolean
    uppercase?: boolean
    size?: Stage.Sizes
  }

  interface PrivateProps extends Props {
    children: (checked: boolean, focus: boolean) => React.ReactElement
    type?: CheckType
    classes: Classes<Styles>
  }

  interface Styles {
    container: {
      disabled: Props['disabled']
    }
    label: {
      disabled: Props['disabled']
      size: Props['size']
      uppercase: Props['uppercase']
    }
  }
}

export default CheckTypes
