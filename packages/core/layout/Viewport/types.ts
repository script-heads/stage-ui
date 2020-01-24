import ThemeType from '../../misc/themes/types'
import Shared from '@flow-ui/whale/types'
import ThemeTypes from '../../misc/themes/types'

declare namespace ViewportTypes {

    interface Themes {
        light: ThemeTypes.Index
        dark: ThemeTypes.Index
    }

    interface Props {
        wrapper?: boolean
        className?: string
        id?: string
        theme?: Shared.FunctionalProp<Themes, ThemeType.Index>
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
        theme: ThemeType.Index
    }

    interface DialogOptions {
        /**
         * Title of modal window header
         */
        title?: string
        /**
         * Subtitle of modal window header
         */
        subtitle?: string
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
        customContent?: React.ReactElement
    }
}

export default ViewportTypes