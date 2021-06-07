import { Options } from '@emotion/cache'
import { SerializedStyles } from '@emotion/react'
import SystemTypes from '@stage-ui/system/types'

declare namespace ViewportTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Defines whether the viewport renders content inside the container
     * @default false
     */
    wrapper?: boolean
    /**
     * Emotion cache options
     */
    cache?: Options
    /**
     * Defines which theme to put in context.
     * @default light
     */
    theme?: 'dark' | 'light' | SystemTypes.Theme
    /**
     * Set global CSS
     */
    global?: SerializedStyles
    /**
     * Application content
     */
    children?: React.ReactNode
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
  }

  interface Themes {
    light: SystemTypes.Theme
    dark: SystemTypes.Theme
  }

  interface MountArea {
    className?: string
  }

  interface MountAreaElement {
    key: string
    children: React.ReactElement
  }

  interface Context {
    theme: SystemTypes.Theme
  }
}

export default ViewportTypes
