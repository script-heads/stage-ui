import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  return {
    container: [
      {
        willChange: 'scroll-position',
        position: 'fixed',
        zIndex: 300,
      },
      styleProps.layout,
      styleProps.padding,
      styleProps.color,
      styleProps.border,
    ],
  }
}
export default createClasses
