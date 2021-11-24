import { ColorProp } from '@stage-ui/system/props/color'

declare namespace IconTypes {
  /**
   * TODO: circle и oval добавляют только padding
   */
  type IconShapes = 'circle' | 'oval' | 'square'
  type IconType = 'filled' | 'outline'

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    svg: React.ReactElement
    shape?: IconShapes
    size?: Stage.Sizes | (string & { T?: string })
    color?: ColorProp
    hoverColor?: ColorProp
    background?: ColorProp
    rotate?: number
  }

  interface IconProps extends Omit<Props, 'svg'> {
    type?: IconType
  }

  type Classes = {
    container: {
      shape?: IconShapes
      size: Stage.Sizes | (string & { T?: string })
    }
    icon: void
  }
}

export default IconTypes
