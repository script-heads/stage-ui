import * as themes from '@stage-ui/core/themes'

export const light = themes.light.replace({
  overrides: {
    Pageswitch: {
      pageButton: {
        borderRadius: 0,
      },
    },
    Button: {
      container: {
        background: 'red',
      },
    },
  },
})
