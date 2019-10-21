import Global from "@flow-ui/core/types";

declare namespace DropTypes {
  interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
  }

  interface Props extends Global.SelfProps {
    target: any
    align?: "top" | "bottom" | "left" | "right"
    justify?: "start" | "center" | "end" | "start-outside" | "end-outside"
    stretchWidth?: boolean
    stretchHeight?: boolean
    distance?: number
    onClickOutside?: (event: React.MouseEvent<HTMLElement>, outsideTarget?: boolean) => void
    onEsc?: () => void
    children?: React.ReactNode
  }

  type Styles = {
    container: null
  }
}

export default DropTypes;