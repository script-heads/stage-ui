import * as themes from '@stage-ui/core/themes'

export const light = themes.light.replace({
  main: {
    radius: {
      xs: '0.25rem',
    },
  },
  overrides: (main) => ({
    TextField: {
      container: {
        color: main.color.blue[100].hex(),
      },
      field: {
        borderRadius: main.radius.xs,
      },
      label: {
        color: 'red',
      },
    },
  }),
})
