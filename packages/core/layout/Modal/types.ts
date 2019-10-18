import Global from "@flow-ui/core/types";

declare namespace ModalTypes {

    export interface Ref {
        open: (customContent?: React.ReactElement | null) => void
        close: (didClose?: () => void) => void
        setTitle: (title: string) => void
        setSubtitle: (subtitle: string) => void
        setCenter: (center: boolean) => void
        setCustomContent: (customContent: React.ReactElement | null) => void
        title?: string
        subtitle?: string
        center: boolean
        customContent: React.ReactElement | null
        overlay: any
        window: any
    }

    interface Props extends Global.SelfProps {
        title?: string
        subtitle?: string
        fullSize?: boolean
        children?: any

        hideHeader?: boolean

        onClose?: () => void
        didClose?: () => void
        onOpen?: () => void
        didOpen?: () => void
    }

    interface InnerProps extends Props {
        innerRef: any
    }

    interface StyleProps {
        visible: boolean
        center: boolean
        fullSize?: boolean
    }

    interface ModalOverlayProps {
        visible: boolean
        center: boolean
        fullSize?: boolean
        children?: any
        styles: Global.FlowStyles<StyleKeys, Variants>
    }

    interface ModalWindowProps {
        title?: string
        subtitle?: string
        visible: boolean
        center: boolean
        fullSize?: boolean
        hideHeader?: boolean
        children?: any
        containerAttr?: React.HTMLAttributes<HTMLElement> & Global.SelfProps
        onClosePressed: () => void
        styles: Global.FlowStyles<StyleKeys, Variants>
    }

    interface ModalHeaderProps {
        title?: string
        subtitle?: string
        hideHeader?: boolean
        onClosePressed: () => void
        styles: Global.FlowStyles<StyleKeys, Variants>
    }

    interface Variants {
        visible?: boolean
        center?: boolean
        fullSize?: Props["fullSize"]
        fullSizeCenter?: boolean
    }

    type StyleKeys = 'overlay' | 'window' | 'header' | 'cross'

    type Styles = Global.ComponentStyles<StyleKeys, Variants>

}

export default ModalTypes