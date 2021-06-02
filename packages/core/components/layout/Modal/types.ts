import { Classes } from "@stage-ui/system/hooks/useSystem"
import { AllEventProps, AttributeProps, BorderProps, ColorProps, CoreProps, LayoutProps, PaddingProps } from "@stage-ui/system/props/types"

declare namespace ModalTypes {
  type ModalDecoration = 'modal' | 'panel' | 'fullscreen'
  type ExtentedProps = AttributeProps &
    AllEventProps<HTMLDivElement> &
    CoreProps<Styles> &
    ColorProps &
    BorderProps &
    PaddingProps &
    LayoutProps

  export interface Ref {
    /**
     * Opens modal view with optionaly custom content
     */
    open: (render?: React.ReactElement | null) => void
    /**
     * Closes modal, didClose arg called at closing complete
     */
    close: (didClose?: () => void) => void
    /**
     * Fn for changing title
     */
    setTitle: (title: string) => void
    /**
     * Fn for changing subtitle
     */
    setSubtitle: (subtitle: string) => void
    /**
     * Fn for changing content if it custom
     */
    setRender: (render: React.ReactElement | null) => void
    /**
     * Current custom content of modal view
     */
    render: React.ReactElement | null
    /**
     * Current title of modal view
     */
    title?: string
    /**
     * Current subtitle of modal view
     */
    subtitle?: string
    /**
     * Ref for overlay view <div>
     */
    overlay: HTMLDivElement
    /**
     * Ref for view view <div>
     */
    window: HTMLDivElement
  }

  interface Props extends ExtentedProps {
    /**
     * Title will be displaed at top
     */
    title?: string
    /**
     * Subtitle will be displaed after title
     */
    subtitle?: string
    /**
     * Content for modal view
     */
    children?: React.ReactNode
    /**
     * Open state, for controlled component
     */
    opened?: boolean
    /**
     * How view will looks like
     * @default modal
     */
    decoration?: ModalDecoration
    /**
     * Sizes of view and its content
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Disable header and hide it
     */
    hideHeader?: boolean
    /**
     * If true then tap on overlay will close view
     * @default false
     */
    overlayClose?: boolean
    /**
     * Fn calls before view close
     */
    onClose?: () => void
    /**
     * Fn calls after view close
     */
    didClose?: () => void
    /**
     * Fn calls before view open
     */
    onOpen?: () => void
    /**
     * Fn calls after view open
     */
    didOpen?: () => void
  }

  interface ModalOverlayProps {
    getStyles: () => {
      classes: Classes<Styles>
      state: StyleState
    }
    children?: React.ReactNode
  }

  interface ModalWindowProps {
    title?: string
    subtitle?: string
    hideHeader?: boolean
    children?: React.ReactNode
    containerAttr?: ExtentedProps
    containerEvents?: any
    onClosePressed: () => void
    getStyles: () => {
      classes: Classes<Styles>
      state: StyleState
    }
  }

  interface ModalHeaderProps {
    title?: string
    subtitle?: string
    hideHeader?: boolean
    onClosePressed: () => void
    getStyles: () => {
      classes: Classes<Styles>
      state: StyleState
    }
  }

  type StyleState = {
    visible?: boolean
    decoration?: Props['decoration']
  }

  interface Styles {
    /**
     * Backside view
     */
    overlay: StyleState
    /**
     * Wrapper of modal
     */
    wrapper: StyleState
    /**
     * Window it self
     */
    window: StyleState
    /**
     * Header of window
     */
    header: StyleState
    /**
     * Close button
     */
    cross: StyleState
  }

  interface DialogOptions extends Props {
    /**
     * Message of dialog
     */
    message?: string
    /**
     * Button text
     */
    buttonText?: string
    /**
     * if custom content filled then message and buttonText will be ignored
     */
    render?: (close: () => void) => React.ReactElement
  }
}

export default ModalTypes
