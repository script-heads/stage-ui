declare namespace BadgeTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Show in badge
     */
    content: React.ReactNode
    /**
     * Badge size
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Badge shape
     */
    shape?: 'square' | 'rounded' | 'round'
    /**
     * Where barge will be placed
     */
    align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
    /**
     * The element whose badge will be shown
     */
    children?: React.ReactNode
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Badge container
     */
    holder: {
      align: Props['align']
      shape: Props['shape']
    }
  }
}

export default BadgeTypes
