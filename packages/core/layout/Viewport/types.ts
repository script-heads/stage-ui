import { Options } from '@emotion/cache'

declare namespace ViewportTypes {
  interface Props {
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
    theme?: 'dark' | 'light' | Stage.Theme
    /**
     * Set global CSS
     */
    global?: Stage.CSSInterpolation
    /**
     * Application content
     */
    children?: React.ReactNode
  }

  type MountArea = {
    className?: string
  }

  type MountAreaPlacement =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'centerLeft'
    | 'center'
    | 'centerRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'

  type MountAreaElement = {
    key: string
    children: React.ReactElement
    placement: MountAreaPlacement
  }

  type Context = {
    theme: Stage.Theme
  }

  type Shared = {
    addElement: (
      children: React.ReactElement,
      key?: string,
      placement?: MountAreaPlacement,
    ) => string
    removeElement: (key: string) => void
  }
}

export default ViewportTypes
