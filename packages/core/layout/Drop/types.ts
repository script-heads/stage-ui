import Global from '@flow-ui/core/types'

declare namespace DropTypes {
  interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
  }

  interface Props extends Global.SelfProps, Global.HTMLAttributes, Global.EventHandlers {
    target: any
    align?: 'top' | 'bottom' | 'left' | 'right'
    justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside'
    stretchWidth?: boolean
    stretchHeight?: boolean
    distance?: number
    onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void
    onEsc?: () => void
    children?: React.ReactNode
  }

  interface Ref extends Partial<HTMLDivElement> {
    updatePosition: () => void
    updateVerticalPosition: () => void
    updateHorizontalPosition: () => void
  }

  interface Styles {
    container: void
  }
}

export default DropTypes