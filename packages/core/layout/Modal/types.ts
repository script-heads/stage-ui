import React from 'react'

import {
  AllEventProps,
  AttributeProps,
  BorderProps,
  ColorProps,
  CoreProps,
  LayoutProps,
  PaddingProps,
} from '@stage-ui/system/props/types'

import { ResolvedStyleProps } from '@stage-ui/system/props'

import ScrollViewTypes from '../ScrollView/types'

declare namespace ModalTypes {
  type ModalDecoration = 'modal' | 'panel' | 'fullscreen' | 'rightPanel' | 'leftPanel'
  type ExtentedProps = AttributeProps &
    AllEventProps<HTMLDivElement> &
    CoreProps<Classes> &
    ColorProps &
    BorderProps &
    PaddingProps &
    LayoutProps

  export interface Ref {
    /**
     * Opens modal view with optionaly custom content
     */
    open: (render?: React.ReactElement | null) => void
    /**
     * Closes modal, didClose arg called at closing complete
     */
    close: (didClose?: () => void) => void
    /**
     * Fn for changing title
     */
    setTitle: (title: string) => void
    /**
     * Fn for changing subtitle
     */
    setSubtitle: (subtitle: string) => void
    /**
     * Fn for changing content if it custom
     */
    setRender: (render: React.ReactElement | null) => void
    /**
     * Current custom content of modal view
     */
    render: React.ReactElement | null
    /**
     * Current title of modal view
     */
    title?: string
    /**
     * Current subtitle of modal view
     */
    subtitle?: string
    /**
     * Ref for overlay view <div>
     */
    overlay: ScrollViewTypes.Ref
    /**
     * Ref for view view <div>
     */
    window: HTMLDivElement
  }

  interface Props extends ExtentedProps {
    /**
     * Whether to use focus-trap-react inside
     */
    trapFocus?: boolean
    modalId?: string
    /**
     * Title will be displaed at top
     */
    title?: string
    /**
     * Subtitle will be displaed after title
     */
    subtitle?: string
    /**
     * Content for modal view
     */
    children?: React.ReactNode
    /**
     * Open state, for controlled component
     */
    opened?: boolean
    /**
     * How view will looks like
     * @default modal
     */
    decoration?: ModalDecoration
    /**
     * Sizes of view and its content
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Disable header and hide it
     */
    hideHeader?: boolean
    /**
     * If true then tap on overlay will close view
     * @default false
     */
    overlayClose?: boolean
    /**
     * Fn calls before view close
     */
    onClose?: () => void
    /**
     * Fn calls after view close
     */
    didClose?: () => void
    /**
     * Fn calls before view open
     */
    onOpen?: () => void
    /**
     * Fn calls after view open
     */
    didOpen?: () => void
  }

  interface ModalOverlayProps {
    getStyles: () => {
      classes: Stage.Classes<Classes>
      state: ClassState
      styleProps: ResolvedStyleProps
    }
    children?: React.ReactNode
  }

  interface ModalWindowProps<Element extends HTMLElement> {
    title?: string
    subtitle?: string
    hideHeader?: boolean
    children?: React.ReactNode
    containerAttr?: React.HTMLAttributes<Element>
    containerEvents?: any
    onClosePressed: () => void
    getStyles: () => {
      classes: Stage.Classes<Classes>
      state: ClassState
      styleProps: ResolvedStyleProps
    }
  }

  interface ModalHeaderProps {
    title?: string
    subtitle?: string
    hideHeader?: boolean
    onClosePressed: () => void
    getStyles: () => {
      classes: Stage.Classes<Classes>
      state: ClassState
    }
  }

  type ClassState = {
    visible?: boolean
    decoration?: Props['decoration']
  }

  type Classes = {
    /**
     * Backside view
     */
    overlay: ClassState
    /**
     * Wrapper of modal
     */
    wrapper: ClassState
    /**
     * Window it self
     */
    window: ClassState
    /**
     * Header of window
     */
    header: ClassState
    /**
     * Close button
     */
    cross: ClassState
  }

  type DialogRenderFn = (close: () => void) => React.ReactElement

  interface DialogOptions extends Props {
    /**
     * if custom content filled then message and buttonText will be ignored
     */
    render: DialogRenderFn
  }
}

export default ModalTypes
