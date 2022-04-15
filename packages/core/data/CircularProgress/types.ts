declare namespace CircularProgressTypes {
  type CircularProgressDecoration = 'filled' | 'outline'
  type CircularProgressShape = 'square' | 'round'

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Current value of CircularProgress, for controlled component
     */
    value?: number
    /**
     * Sizes of CircularProgress
     * @display Sizes
     * @link /props/#size
     * @default m
     */
    size?: Stage.Sizes | string
    /**
     * Defines how CircularProgress look
     * @default filled
     */
    decoration?: CircularProgressDecoration
    /**
     * Shape of CircularProgress
     * @default rounded
     */
    shape?: CircularProgressShape
    /**
     * Color of CircularProgress
     */
    color?: Stage.ColorProp
    /**
     * Width of CircularProgress
     */
    strokeWidth?: string | number
    /**
     * Background color for stroke of CircularProgress
     */
    strokeBackgroundColor?: Stage.ColorProp
    /**
     * Show value
     */
    showValue?: boolean

    children?: React.ReactNode

    text?: string | number
  }

  type State = {
    shape: CircularProgressShape
    size: Stage.Sizes | string
    decoration: CircularProgressDecoration
    sizeRem: string
    sizePx: number
    strokeWidthRem: string
    strokeWidthPx: number
    radius: number
    circumference: number
    dash: number
  }
  type Classes = {
    container: State
    svg: State
    circle: State
    circleBackground: State
    text: State
  }
}

export default CircularProgressTypes
