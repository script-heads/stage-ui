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
    WhaleTypes.EventProps<HTMLDivElement>,
    WhaleTypes.CoreProps<Overrides>,
    WhaleTypes.ColorProps,
    WhaleTypes.BorderProps,
    WhaleTypes.PaddingProps,
    WhaleTypes.LayoutProps {
    target: any
    align?: 'top' | 'bottom' | 'left' | 'right'
    justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside'
    stretchWidth?: boolean
    stretchHeight?: boolean
    spacing?: number
    onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void
    onEsc?: () => void
    children?: React.ReactNode
  }

  interface Ref extends Partial<HTMLDivElement> {
    updatePosition: () => void
  }

  interface Overrides {
    container: void
  }
}

export default DropTypes