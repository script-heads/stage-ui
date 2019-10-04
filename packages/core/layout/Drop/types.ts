import Global from "../../types";

declare namespace DropTypes {
  interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
  }

  interface Props extends Global.StyleSelfProps {
    target: React.ReactNode
    align?: "top" | "bottom" | "left" | "right"
    justify?: "start" | "center" | "end" | "start-outside" | "end-outside"
    stretchWidth?: boolean
    stretchHeight?: boolean
    distance?: number
    onClickOutside?: (event: any) => void
    onEsc?: () => void
    children?: React.ReactNode
  }
}

export default DropTypes;