import WhaleTypes from '@flow-ui/whale/types'

declare namespace ModalTypes {
    
    type ModalDecoration = 'modal' | 'panel'
    type ExtentedProps = 
        WhaleTypes.AttributeProps &
        WhaleTypes.AllEventProps<HTMLDivElement> &
        WhaleTypes.CoreProps<Styles> &
        WhaleTypes.ColorProps &
        WhaleTypes.BorderProps &
        WhaleTypes.PaddingProps &
        WhaleTypes.LayoutProps

    export interface Ref {
        open: (customContent?: React.ReactElement | null) => void
        close: (didClose?: () => void) => void
        setTitle: (title: string) => void
        setSubtitle: (subtitle: string) => void
        setCustomContent: (customContent: React.ReactElement | null) => void
        title?: string
        subtitle?: string
        customContent: React.ReactElement | null
        overlay: React.ReactNode
        window: React.ReactNode
    }

    interface Props extends ExtentedProps {
        title?: string
        subtitle?: string
        children?: React.ReactNode
        opened?: boolean
        decoration?: ModalDecoration
        size?: WhaleTypes.Size
        hideHeader?: boolean
        overlayClose?: boolean
        onClose?: () => void
        didClose?: () => void
        onOpen?: () => void
        didOpen?: () => void
    }

    interface InnerProps extends Props {
        innerRef: any
    }
    interface ModalOverlayProps {
        getStyles: () => {
            cs: WhaleTypes.ComponentStyles<Overrides>,
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
            cs: WhaleTypes.ComponentStyles<Overrides>,
            state: StyleState
        }
    }

    interface ModalHeaderProps {
        title?: string
        subtitle?: string
        hideHeader?: boolean
        onClosePressed: () => void
        getStyles: () => {
            cs: WhaleTypes.ComponentStyles<Overrides>,
            state: StyleState
        }
    }

    type StyleState = {
        visible?: boolean
        decoration?: Props['decoration']
    }

    interface Overrides {
        overlay: StyleState
        wrapper: StyleState
        window: StyleState
        header: StyleState
        cross: StyleState
    }
}

export default ModalTypes