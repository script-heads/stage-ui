import light from './light'

const dark = light.replace({
  main: {
    name: 'Dark',
    color: {
      background: [22, 22, 24],
      backgroundVariant: [50, 50, 60],
      surface: [28, 28, 30],
      surfaceVariant: [75, 75, 85],

      onBackground: [255, 255, 255],
      onSurface: [255, 255, 255],
      onPrimary: [255, 255, 255],
      onSecondary: [255, 255, 255],

      lightest: [57, 57, 67],
      light: [110, 110, 120],
      hard: [180, 180, 200],
      hardest: [230, 230, 250],

      error: [188, 0, 0],
      success: [0, 120, 0],
      warning: [255, 149, 0],
    },
  },
})

export default dark
