import FlowTypes from '../../types'

declare global {
  namespace Stage {
    interface ThemeOverrides extends FlowTypes.Overrides {}
  }
}

declare module '@emotion/react' {
  export interface Theme extends Stage.Theme {}
}

export { default as light } from './light'
export { default as dark } from './dark'
