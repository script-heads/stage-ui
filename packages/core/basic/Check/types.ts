import { ClassesSchemaDefinition } from '@stage-ui/system/hooks/useSystem'

declare namespace CheckTypes {
  interface Props<
    Element = HTMLDivElement,
    ClassesOveddides extends ClassesSchemaDefinition = Classes,
  > extends Stage.AllProps<Element, ClassesOveddides> {
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
    children: (checked: boolean) => React.ReactElement
  }

  type Classes = {
    container: void
    label: void
  }
}

export default CheckTypes
