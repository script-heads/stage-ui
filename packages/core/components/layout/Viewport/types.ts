import { Options } from '@emotion/cache'
import { SerializedStyles } from '@emotion/react'

declare namespace ViewportTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Styles> {
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
    theme?: 'dark' | 'light' | Theme
    /**
     * Set global CSS
     */
    global?: SerializedStyles
    /**
     * Application content
     */
    children?: React.ReactNode
  }

  interface Styles {
    /**
     * Root element
     */
    container: void
  }

  interface Themes {
    light: Theme
    dark: Theme
  }

  interface MountArea {
    className?: string
  }

  interface MountAreaElement {
    key: string
    children: React.ReactElement
  }

  interface Context {
    theme: Theme
  }
}

export default ViewportTypes
