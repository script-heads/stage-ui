import { Sizes } from '@stage-ui/system'
import { ColorProp } from '@stage-ui/system/props/color'
import { AllProps } from '@stage-ui/system/props/types'

declare namespace IconTypes {
  /**
   * TODO: circle и oval добавляют только padding
   */
  type IconShapes = 'circle' | 'oval' | 'square'
  type IconType = 'filled' | 'outline'

  interface Props extends AllProps<HTMLDivElement, Styles> {
    svg: React.ReactElement
    shape?: IconShapes
    size?: Stage.Sizes | (string & { T?: string })
    color?: ColorProp
    background?: ColorProp
    rotate?: number
  }

  interface IconProps extends Omit<Props, 'svg'> {
    type?: IconType
  }

  interface Styles {
    container: {
      shape?: IconShapes
      size: Stage.Sizes | (string & { T?: string })
    }
    icon: void
  }
}

export default IconTypes
