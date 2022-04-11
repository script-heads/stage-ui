import MeterThumbTypes from './MeterThumb/types'

declare namespace MeterTypes {
  type MeterDecoration = 'filled' | 'outline'
  type MeterShape = 'square' | 'round'

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Current value of meter, for controlled component
     */
    value?: number
    /**
     * Sizes of meter
     * @display Sizes
     * @link /props/#size
     * @default m
     */
    size?: Stage.Sizes
    /**
     * Defines how meter look
     * @default filled
     */
    decoration?: MeterDecoration
    /**
     * Shape of meter
     * @default rounded
     */
    shape?: MeterShape
    /**
     * Color of meter
     */
    color?: Stage.ColorProp
    /**
     * Enabled progress animation
     * @default false
     */
    loading?: boolean
    /**
     * Children thumbs
     */
    children?: React.ReactElement<MeterThumbTypes.Props>[]
  }

  type Classes = {
    /**
     * Root view
     */
    container: {
      shape: MeterShape
      size: Stage.Sizes
      decoration: MeterDecoration
    }
    thumbWrapper: void
    /**
     * Thumb view
     */
    thumb: {
      shape: MeterShape
      size: Stage.Sizes
    }
  }
}

export default MeterTypes
