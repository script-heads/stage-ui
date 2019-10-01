import { CSSProperties } from "react";
import Global from "../../types";
import { Interpolation } from "@emotion/core";

declare namespace ModalTypes {

    interface Props extends Global.StyleSelfProps {
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
        styles?: any
    }

    interface ModalWindowProps {
        title?: string
        subtitle?: string
        visible: boolean
        center: boolean
        fullSize?: boolean
        hideHeader?: boolean
        children?: any
        containerAttr?: React.HTMLAttributes<HTMLElement> & Global.StyleSelfProps
        onClosePressed: () => void
        styles?: any
    }

    interface ModalHeaderProps {
        title?: string
        subtitle?: string
        hideHeader?: boolean
        onClosePressed: () => void
        styles: any
    }

    export interface Overrides {
        overlay: Interpolation
        window: Interpolation
        header: Interpolation
        cross: Interpolation
    }

}

export default ModalTypes