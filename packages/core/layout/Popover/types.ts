import FlexboxTypes from '../Flexbox/types'

declare namespace PopoverTypes {
  interface Props extends FlexboxTypes.Props {
    /**
     * Alignment of popover's arrow
     */
    align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
    /**
     * offset arrow position
     */
    arrowOffset?: string | number
    /**
     * Width/height of popover's arrow
     */
    arrowSize?: string | number
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Arrow container
     */
    arrow: {
      align: Props['align']
    }
  }
}

export default PopoverTypes
