import ThemeType from '../../misc/themes/types';
import Global from '@flow-ui/core/types';

declare namespace ViewportTypes {

    export interface Props {
        wrapper?: boolean
        className?: string
        id?: string
        theme?: Global.FunctionalProp<any, ThemeType.Index>
        children?: React.ReactNode
    }

    export interface MountArea {
        className?: string
    }

    export interface MountAreaElement {
        key: string,
        children: React.ReactElement
    }

    export interface Context {
        theme: ThemeType.Index
        browser: any
    }

    export interface DialogOptions {
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

    export interface Styles {
        
    }
}

export default ViewportTypes