import WhaleTypes from '@flow-ui/whale/types'

declare namespace ModalTypes {
    
    type ExtentedProps = 
        WhaleTypes.AttributeProps &
        WhaleTypes.EventProps<HTMLDivElement> &
        WhaleTypes.CoreProps<Overrides> &
        WhaleTypes.ColorProps &
        WhaleTypes.BorderProps &
        WhaleTypes.PaddingProps &
        WhaleTypes.LayoutProps

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

    interface Props extends ExtentedProps {
        title?: string
        subtitle?: string
        fullSize?: boolean
        children?: any
        opened?: boolean

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
        styles: WhaleTypes.ComponentStyles<Overrides>
    }

    interface ModalWindowProps {
        title?: string
        subtitle?: string
        visible: boolean
        center: boolean
        fullSize?: boolean
        hideHeader?: boolean
        children?: any
        containerAttr?: ExtentedProps
        onClosePressed: () => void
        styles: WhaleTypes.ComponentStyles<Overrides>
    }

    interface ModalHeaderProps {
        title?: string
        subtitle?: string
        hideHeader?: boolean
        onClosePressed: () => void
        styles: WhaleTypes.ComponentStyles<Overrides>
    }

    interface Overrides {
        overlay: {
            visible?: boolean
            center?: boolean
        }
        window: {
            visible?: boolean
            fullSizeCenter?: boolean
        }
        header: void
        cross: void
    }
}

export default ModalTypes