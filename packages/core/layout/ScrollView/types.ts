import React from 'react'
import SystemTypes from '@stage-ui/system/types'

declare namespace ScrollViewTypes {
        
    interface ScrollViewEvent {
        scrollTop: number
        scrollLeft: number
        scrollWidth: number
        scrollHeight: number
    }

    interface ScrollToOptions {
        /**
         * if true watchElement will not 
         * call at this scrollUpdate
         */
        preventWatchElement?: boolean
    }

    interface ScrollToElementOptions extends ScrollToOptions {
        /**
         * Offset px at top edge of element
         */
        offsetTop?: number
    }

    interface ScrollParams extends ScrollToOptions {
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
         * @display SystemTypes.Size
         * @link /props/#size
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
        xBarPosition?: 'top' | 'bottom' | 'none'
        /**
         * Position of Y bar
         * @default right
         */
        yBarPosition?: 'left' | 'right' | 'none'
        /**
         * If false
         * onflowscroll will not dispatch
         */
        sendFlowScollEvent?: boolean
        /**
         * Calls when ever user scrolls
         */
         onScroll?: (event: ScrollViewEvent) => void
         /**
         * Calls when elements with data-id attribut got visible
         * and stays at the top of visible area of ScrollView
         */
        watchElement?: <T extends HTMLDivElement>(dataId: string, element: T) => void
    }

    interface Ref {
        /**
         * Forcing update scrollview positions
         */
        updateScroll: () => void
        /**
         * Scroll to top
         * @deprecated use scrollTop()
         */
        onScrollTop: () => void
        /**
         * Scroll to top
         */
        scrollTo: (x: number, y: number, options?: ScrollToOptions) => void
        /**
         * Scroll to top
         */
        scrollTop: (options?: ScrollToOptions) => void
        /**
         * Scroll to bottom
         */
        scrollBottom: (options?: ScrollToOptions) => void
        /**
         * Scroll to specific item by its data-id attribute
         * data-id attribute should be unique at document
         * if item not found function returns false
         */
        scrollToElement: (dataId: string, options?: ScrollToElementOptions) => boolean
    }

    interface Styles {
        /**
         * Root wrapper
         */
        wrapper: void
        /**
         * Root view
         */
        container: void
        /**
         * Content view
         */
        content: void
        /**
         * Webkit container for webkit browsers
         */
        webkit: void
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