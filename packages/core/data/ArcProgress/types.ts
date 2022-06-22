declare namespace ArcProgressTypes {
  type ArcProgressShape = 'square' | 'round'

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Current value of ArcProgress, for controlled component
     */
    value?: number
    /**
     * Sizes of ArcProgress
     * @display Sizes
     * @link /props/#size
     * @default m
     */
    size?: Stage.Sizes | string
    /**
     * Shape of ArcProgress
     * @default rounded
     */
    shape?: ArcProgressShape
    /**
     * Color of ArcProgress
     */
    color?: Stage.ColorProp
    /**
     * Width of ArcProgress
     */
    strokeWidth?: string | number
    /**
     * Background color for stroke of ArcProgress
     */
    strokeBackgroundColor?: Stage.ColorProp

    children?: React.ReactNode
  }

  type State = {
    shape: ArcProgressShape
    size: Stage.Sizes | string
    sizeRem: string
    sizeHalfRem: string
    sizePx: number
    strokeWidthRem: string
    strokeWidthPx: number
    radius: number
    circumference: number
    dash: number
    backgroundDash: number
  }
  type Classes = {
    container: State
    svg: State
    arc: State
    arcBackground: State
  }
}

export default ArcProgressTypes
