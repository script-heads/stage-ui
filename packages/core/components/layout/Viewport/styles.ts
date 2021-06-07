import Types from './types'
import resets from './resets'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  const attachTheme = {
    background: theme.color.background.rgb().string(),
    color: theme.color.onBackground.rgb().string(),
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    p: theme.assets.typography.paragraph,
    h1: theme.assets.typography.header.l,
    h2: theme.assets.typography.header.m,
    h3: theme.assets.typography.header.s,
    h4: theme.assets.typography.header.xs,
    ...theme.assets.typography.text.m,
  }

  return {
    container: [
      !props.wrapper && resets,
      props.wrapper ? attachTheme : { html: attachTheme },
      props.global,
      styleProps.all,
    ],
  }
}

export default createClasses
