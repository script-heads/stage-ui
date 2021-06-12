import { ClassesSchemaDefinition } from '@stage-ui/system/hooks/useSystem'

declare namespace CheckTypes {
  type CheckType = 'checkbox' | 'radio' | 'switch'

  interface Props<Element = HTMLDivElement, ClassesOveddides extends ClassesSchemaDefinition = Classes>
    extends Stage.AllProps<Element, ClassesOveddides> {
    label?: string
    labelColor?: Stage.ColorProp
    checked?: boolean
    disabled?: boolean
    defaultValue?: boolean
    uppercase?: boolean
    size?: Stage.Sizes
    onChange?: (state: boolean) => void
  }

  interface PrivateProps extends Props {
    name?: string
    type?: CheckType
    children: (checked: boolean, focus: boolean) => React.ReactElement
  }

  type Classes = {
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
