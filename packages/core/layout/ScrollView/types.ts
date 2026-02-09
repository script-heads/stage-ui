import React, { HTMLAttributes } from 'react'

declare namespace ScrollViewTypes {
  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onScroll'> {
    /**
     * Props for container
     */
    containerProps?: HTMLAttributes<HTMLDivElement>
    /**
     * Props for scroller
     */
    scrollerProps?: HTMLAttributes<HTMLDivElement>
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
    color?: Stage.ColorProp
    /**
     * Bars size
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Bars shape
     * @default round
     */
    shape?: 'square' | 'round'
    /**
     * Position of X bar
     * @default bottom
     */
    xBarPosition?: 'bottom' | 'none'
    /**
     * Position of Y bar
     * @default right
     */
    yBarPosition?: 'left' | 'right' | 'none'
    /**
     * Scroll bar padding offset
     */
    barOffset?: number
    /**
     * If true
     * onstagescroll will not dispatch
     */
    preventStageEvents?: boolean
    /**
     * Calls when ever user scrolls
     */
    onScroll?: (event: ScrollViewEvent) => void
    /**
     * Calls when elements with data-id attribut got visible
     * and stays at the top of visible area of ScrollView
     */
    watchElement?: WatchElementFn
    /**
     * Include top offset when watchElement works
     */
    watchElementOffset?: number
  }

  type Ref = {
    addWatchElementListener: (
      fn: WatchElementListner['fn'],
      options?: WatchElementListner['options'],
    ) => () => void
    /**
     * Current state
     */
    getCurrentState: () => MemoParams
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
    /**
     * Ref to container element
     */
    container: HTMLDivElement | null
  }

  type Classes = {
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
     * Vertical scroll bar view
     */
    yBar: {
      active: boolean
      shape: Props['shape']
      size: Props['size']
      position: Props['yBarPosition']
    }
    /**
     * Vertical scroll thumb
     */
    yThumb: {
      active: boolean
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

  interface ScrollHTMLDivElement extends HTMLDivElement {
    attributes: HTMLDivElement['attributes'] & {
      'data-scroll-id': Attr
      'data-id': Attr
    }
    style: CSSStyleDeclaration & {
      'scroll-behavior': string
    }
  }

  type WatchElementFn = <T extends HTMLDivElement>(dataId: string, element: T) => void
  type WatchElementListner = { fn: WatchElementFn; options?: { offset?: number } }

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
    /**
     * Smooth scroll
     * @only webkit
     */
    smooth?: boolean
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

  interface MemoParams {
    id: string
    mounted: boolean
    y: boolean
    x: boolean
    events: boolean
    yBar: null | HTMLDivElement
    yThumb: null | HTMLSpanElement
    xBar: null | HTMLDivElement
    xThumb: null | HTMLSpanElement
    container: null | ScrollHTMLDivElement
    content: null | HTMLDivElement
    timeout?: number
    mode: Props['mode']
    watchElementId: string
    watchElementListeners: Record<string, WatchElementListner>
    preventWatchElement: boolean
    preventWatchElementTimer?: number
  }
}

export default ScrollViewTypes
