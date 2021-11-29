import { ReplaceTheme } from '@stage-ui/system/utils/createTheme'

export const darkTheme: ReplaceTheme = {
  main: {
    name: 'Dark',
    color: {
      background: 'rgb(22, 22, 24)',
      backgroundVariant: 'rgb(50, 50, 60)',
      surface: 'rgb(28, 28, 30)',
      surfaceVariant: 'rgb(75, 75, 85)',

      onPrimary: 'rgb(255, 255, 255)',
      onSecondary: 'rgb(255, 255, 255)',
      onBackground: 'rgb(255, 255, 255)',
      onSurface: 'rgb(255, 255, 255)',

      light: 'rgb(110, 110, 120)',
      lightest: 'rgb(57, 57, 67)',
      hard: 'rgb(180, 180, 200)',
      hardest: 'rgb(230, 230, 250)',

      error: 'rgb(188, 0, 0)',
      warning: 'rgb(255, 149, 0)',
      success: 'rgb(0, 120, 0)',
    },
  },
}
