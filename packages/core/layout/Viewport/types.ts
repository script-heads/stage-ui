import WhaleTypes from '@flow-ui/whale/types'
import { Options } from '@emotion/cache'
import { SerializedStyles } from '@emotion/core'
import ModalTypes from '../Modal/types'

declare namespace ViewportTypes {

    interface Themes {
        light: WhaleTypes.Theme
        dark: WhaleTypes.Theme
    }

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        wrapper?: boolean
        cache?: Options
        theme?: 'dark' | 'light' | WhaleTypes.Theme
        global?: SerializedStyles
        children?: React.ReactNode
    }

    interface MountArea {
        className?: string
    }

    interface MountAreaElement {
        key: string,
        children: React.ReactElement
    }

    interface Context {
        theme: WhaleTypes.Theme
    }

    interface DialogOptions {
        /**
         * Title of modal window header
         */
        title?: ModalTypes.Props['title']
        /**
         * Subtitle of modal window header
         */
        subtitle?: ModalTypes.Props['subtitle']
        /**
         * Dialog size
         */
        size?: ModalTypes.Props['size']
        /**
         * Overrides
         */
        styles?: ModalTypes.Props['styles']
        /**
         * Dialog decoration
         */
        decoration?: ModalTypes.Props['decoration']
        /**
         * Message of dialog
         */
        message?: string
        /**
         * Button text
         */
        buttonText?: string
        /**
         * Hides modal window header
         */
        hideHeader?: boolean
        /**
         * if custom content filled then message and buttonText will be ignored
         */
        customContent?: (close: () => void) => React.ReactElement
    }

    interface Styles {
        container: void
    }
}

export default ViewportTypes