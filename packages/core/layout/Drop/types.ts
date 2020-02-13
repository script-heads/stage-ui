import WhaleTypes from '@flow-ui/whale/types'

declare namespace DropTypes {
  interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
  }
  
  interface Props extends
    WhaleTypes.AttributeProps,
    WhaleTypes.AllEventProps<HTMLDivElement>,
    WhaleTypes.CoreProps<Overrides>,
    WhaleTypes.ColorProps,
    WhaleTypes.BorderProps,
    WhaleTypes.PaddingProps,
    WhaleTypes.LayoutProps {
    /**
     * Target where to place drop
     */
    target?: any
    /**
     * Will mount or unmount Drop
     */
    visible?: boolean

    align?: 'top' | 'bottom' | 'left' | 'right'
    justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside'
    stretchWidth?: boolean
    stretchHeight?: boolean
    followCursor?: boolean
    /**
     * Space around drop
     * like margin or so
     */
    spacing?: number
    /**
     * Event will calls on
     * outside mouse clicks
     */
    onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void
    /**
     * Calls whenever esc pressed
     */
    onEsc?: () => void
    children?: React.ReactNode
  }

  interface Ref extends Partial<HTMLDivElement> {
    /**
     * Update self position of drop
     * useful when target changes origins and sizes
     */
    updatePosition: () => void
    /**
     * Can be use ONLY on
     * uncontrolled compnents
     */
    setVisible: (state: boolean) => void
  }

  interface Overrides {
    container: void
  }
}

export default DropTypes