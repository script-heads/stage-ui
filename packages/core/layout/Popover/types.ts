import CSS from 'csstype'

declare namespace PopoverTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Alignment of popover's arrow
     */
    align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
    /**
     * Color of popover's border
     */
    borderColor?: Stage.ColorProp
    /**
     * Color of popover's background
     */
    backgroundColor?: Stage.ColorProp
    /**
     * Popover's content
     */
    children?: React.ReactNode
    /**
     * offset arrow position
     */
    arrowOffset?: CSS.Properties['height']
    /**
     * Width/height of popover's arrow
     */
    arrowSize?: CSS.Properties['width']
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
