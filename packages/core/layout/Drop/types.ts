import SystemTypes from '@stage-ui/system/types'

declare namespace DropTypes {
    interface TargetCoordinates {
        top: number
        bottom: number
        left: number
        right: number
    }

    interface Props extends
        SystemTypes.AttributeProps,
        SystemTypes.AllEventProps<HTMLDivElement>,
        SystemTypes.CoreProps<Styles>,
        SystemTypes.ColorProps,
        SystemTypes.BorderProps,
        SystemTypes.PaddingProps,
        SystemTypes.LayoutProps {
        /**
         * Ref of the target element near which the drop will be shown
         */
        target?: any
        /**
         * Will mount or unmount drop
         * @default true
         */
        visible?: boolean
        /**
         * The side of the target element on which the drop will be shown
         */
        align?: 'top' | 'bottom' | 'left' | 'right' | 'auto-vertical'
        /**
         * Side drop positioning
         */
        justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside'
        /**
         * Open/Close animation type
         * @default slide
         */
        animation?: {
            /**
             * type of animation
             * @default none
             */
            type: 'fade' | 'slide' | 'collapse' | 'none'
            /**
             * duration in ms
             * @default 100
             */
            duration?: number 
            /**
             * reverse animation for 'slide' & 'collapse'
             * @default false
             */
            reverse?: boolean 
        }
        /**
         * Stretch drop by target width
         */
        stretchWidth?: boolean
        /**
         * Stretch drop by target height
         */
        stretchHeight?: boolean
        /**
         * Place drop under coursor
         */
        stickCursor?: boolean
        /**
         * Distance between target and drop
         */
        spacing?: number
        /**
         * Fired when mouse clicks outside drop
         */
        onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void
        /**
         * Fired when user press esc
         */
        onEsc?: () => void
        /**
         * Drop's content
         */
        children?: React.ReactNode
    }

    interface Ref extends Partial<HTMLDivElement> {
        /**
         * Update position of drop (useful when target changes origins and sizes)
         */
        updatePosition: () => void
        /**
         * Change visible state of drop
         */
        setVisible: (state: boolean) => void
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default DropTypes