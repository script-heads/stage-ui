import light from '@stage-ui/core/misc/themes/light'
import NativeTypes from 'types'

const defaultLightTheme = light.replace({
  main: {
    color: {
      primary: [19, 124, 192],
      light: [196, 196, 196],
      background: [255, 255, 255],
    },
  },
})

export type LightTheme = NativeTypes.NativeTheme<typeof defaultLightTheme>

const lightTheme: LightTheme = {
  ...defaultLightTheme,
  radius: {
    xs: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  },
  assets: {
    effects: {
      shadow: {
        shadowColor: '#000',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: 0.1,
        elevation: 1,
      },
    },
    typography: {
      text: {
        xs: {
          fontSize: 14,
          lineHeight: 14,
          color: defaultLightTheme.color.onBackground.hex(),
        },
        s: {
          fontSize: 16,
          lineHeight: 16,
          color: defaultLightTheme.color.onBackground.hex(),
        },
        m: {
          fontSize: 18,
          lineHeight: 22,
          color: defaultLightTheme.color.onBackground.hex(),
        },
        l: {
          fontSize: 20,
          lineHeight: 24,
          color: defaultLightTheme.color.onBackground.hex(),
        },
        xl: {
          fontSize: 24,
          lineHeight: 28,
          color: defaultLightTheme.color.onBackground.hex(),
        },
      },
      header: {
        xs: {
          fontSize: 20,
          lineHeight: 24,
          fontWeight: '700',
          color: defaultLightTheme.color.onBackground.hex(),
        },
        s: {
          fontSize: 24,
          lineHeight: 28,
          fontWeight: '700',
          color: defaultLightTheme.color.onBackground.hex(),
        },
        m: {
          fontSize: 28,
          lineHeight: 36,
          fontWeight: '700',
          color: defaultLightTheme.color.onBackground.hex(),
        },
        l: {
          fontSize: 32,
          lineHeight: 40,
          fontWeight: '700',
          color: defaultLightTheme.color.onBackground.hex(),
        },
        xl: {
          fontSize: 36,
          lineHeight: 44,
          fontWeight: '700',
          color: defaultLightTheme.color.onBackground.hex(),
        },
      },
    },
  },
  spacing: {
    xs: 4,
    s: 10,
    m: 20,
    l: 30,
    xl: 50,
  },
}

export default lightTheme
