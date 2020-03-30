import React from 'react'
import SystemTypes from '@flow-ui/system/types'

declare namespace ScrollViewTypes {

    interface ScrollViewEvent {
        scrollTop: number
        scrollLeft: number
        scrollWidth: number
        scrollHeight: number
    }
    interface ScrollParams {
        deltaX: number
        deltaY: number
        preventDefault: () => void
        stopPropagation: () => void
        cursorHandle?: boolean
    }
    interface Props extends Omit<SystemTypes.AllProps<HTMLDivElement, Styles>, 'onScroll'> {
        /**
         * Any contant of scrollview
         */
        children?: React.ReactNode
        /**
         * Display mode
         * @default scroll
         */
        mode?: 'always' | 'scroll' | 'hidden'
        /**
         * Custom ScrollBar color
         */
        color?: SystemTypes.ColorProp
        /**
         * Bars size
         * @default m
         */
        size?: SystemTypes.Size
        /**
         * Bars shape
         * @default round
         */
        shape?: 'square' | 'round'
        /**
         * Position of X bar
         * @default bottom
         */
        xBarPosition?: 'top' | 'bottom'
        /**
         * Position of Y bar
         * @default right
         */
        yBarPosition?: 'left' | 'right'
        /**
         * If false
         * onflowscroll will not dispatch
         */
        sendFlowScollEvent?: boolean
        /**
         * Calls when ever user scrolls
         */
        onScroll?: (event: ScrollViewEvent) => void
    }

    interface Ref {
        /**
         * Forcing update scrollview positions
         */
        updateScroll: () => void
        /**
         * Scroll to top
         */
        scrollTop: () => void
    }

    interface Styles {
        /**
         * Root view
         */
        container: void
        /**
         * Content view
         */
        content: void
        /**
         * Legacy view for webkit browsers
         */
        legacy: void
        /**
         * Vertical scroll bar view
         */
        yBar: {
            active: boolean,
            shape: Props['shape']
            size: Props['size']
            position: Props['yBarPosition']
        }
        /**
         * Vertical scroll thumb
         */
        yThumb: {
            active: boolean,
            shape: Props['shape']
            size: Props['size']
        }
        /**
         * Horizontal scroll bar view
         */
        xBar: {
            active: boolean
            shape: Props['shape']
            size: Props['size']
            position: Props['xBarPosition']
        }
        /**
         * Horizontal scroll thumb
         */
        xThumb: {
            active: boolean
            shape: Props['shape']
            size: Props['size']
        }
    }
}

export default ScrollViewTypes