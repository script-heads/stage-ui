import { keyframes } from '@emotion/react'

const skeleton = keyframes`
  0% {
    opacity: .8;
  }
  50%{
    opacity: .4;
  }
  100% {
    opacity: .8;
  }
`
export type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' | 'skeleton'

type Props = AllProps<HTMLDivElement, {}> & { decoration?: LayoutDecoration }

const applyLayoutDecoration = (props: Props, theme: Theme) => {
  switch (props.decoration) {
    case 'surface':
      return {
        background: theme.color.surface.hex(),
        borderRadius: theme.radius.m,
        borderWidth: theme.assets.border.width,
        borderStyle: theme.assets.border.style,
        borderColor: theme.assets.border.color,
      }
    case 'minorShadow':
      return {
        background: theme.color.surface.hex(),
        borderRadius: theme.radius.m,
        boxShadow: theme.assets.shadow.s,
      }
    case 'mediumShadow':
      return {
        background: theme.color.surface.hex(),
        borderRadius: theme.radius.m,
        boxShadow: theme.assets.shadow.m,
      }
    case 'majorShadow':
      return {
        background: theme.color.surface.hex(),
        borderRadius: theme.radius.m,
        boxShadow: theme.assets.shadow.l,
      }
    case 'skeleton':
      return {
        background: theme.color.lightest.hex(),
        animation: `${skeleton} 2s ease-in-out infinite`,
      }
  }

  return void 0
}

export default applyLayoutDecoration
