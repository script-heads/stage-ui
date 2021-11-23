import { light } from '@stage-ui/core/themes'

declare global {
  namespace Stage {
    interface Palette<Color> {
      black: Color

      warmShade01: Color
      warmShade02: Color
      warmShade03: Color

      hard01: Color
      hard02: Color

      hardest01: Color

      lightest01: Color

      light01: Color
      light02: Color

      redShade01: Color

      grayShade01: Color
      gray100: Color
      gray200: Color
      gray300: Color
      gray400: Color
      gray500: Color

      violetShade01: Color
      violetShade02: Color
      violetShade03: Color

      greenShade01: Color
      greenShade02: Color
      greenShade03: Color

      polar: Color
      chiffon: Color
      hawkesBlue: Color
      shalimar: Color
      champagne: Color
      snowyMint: Color
      scandal: Color
      paleRose: Color
      lavender: Color
      azalea: Color
      cosmos: Color
      morningGlory: Color
      inchWarm: Color
      goldenYellow: Color
      texasRose: Color
      screamingGreen: Color
      babyBlue: Color
      paleMagenta: Color
      dullLavender: Color
      mayaBlue: Color
      mauvelous: Color
      fadedRed: Color
    }
  }
}

const theme = light.replace({
  main: {
    breakpoints: ['1199.98px', '991.98px', '767.98px', '575.98px'],
    color: {
      background: [250, 250, 250],
      backgroundVariant: [243, 242, 242],
      onBackground: [41, 30, 15],
      surface: [255, 255, 255],
      surfaceVariant: [249, 243, 234],
      onSurface: [35, 35, 35],
      primary: [255, 204, 0],
      onPrimary: [16, 15, 14],
      secondary: [145, 129, 243],
      onSecondary: [255, 255, 255],
      light: [191, 191, 191],
      lightest: [243, 242, 241],
      hard: [117, 115, 113],
      hardest: [66, 63, 61],
      success: [155, 197, 61],
      info: [28, 185, 252],
      warning: [252, 162, 28],
      error: [255, 90, 95],

      palette: {
        black: [16, 16, 17],

        warmShade01: [255, 249, 229],
        warmShade02: [251, 220, 126],
        warmShade03: [255, 187, 0],

        hard01: [107, 114, 128],
        hard02: [156, 163, 175],

        hardest01: [55, 65, 81],

        lightest01: [243, 244, 246],

        light01: [209, 213, 219],
        light02: [229, 231, 235],

        redShade01: [254, 134, 134],

        grayShade01: [230, 230, 230],
        gray100: [243, 244, 246],
        gray200: [229, 231, 235],
        gray300: [209, 213, 219],
        gray400: [156, 163, 175],
        gray500: [107, 114, 128],

        violetShade01: [195, 185, 234],
        violetShade02: [137, 118, 214],
        violetShade03: [78, 53, 177],

        greenShade01: [222, 251, 208, 0.9],
        greenShade02: [114, 216, 142],
        greenShade03: [39, 140, 67],

        polar: [227, 245, 247],
        chiffon: [240, 253, 203],
        hawkesBlue: [210, 233, 254],
        shalimar: [253, 254, 190],
        champagne: [252, 231, 207],
        snowyMint: [207, 252, 207],
        scandal: [200, 254, 251],
        paleRose: [252, 226, 246],
        lavender: [233, 226, 254],
        azalea: [249, 200, 216],
        cosmos: [255, 209, 209],
        morningGlory: [148, 217, 224],
        inchWarm: [173, 231, 9],
        goldenYellow: [251, 222, 4],
        texasRose: [245, 173, 87],
        screamingGreen: [119, 238, 119],
        babyBlue: [108, 244, 236],
        paleMagenta: [243, 135, 218],
        dullLavender: [173, 147, 251],
        mayaBlue: [105, 182, 252],
        mauvelous: [242, 140, 173],
        fadedRed: [255, 122, 122],
      },
    },
    radius: {
      xs: '0.25rem',
      s: '0.5rem',
      m: '0.75rem',
      l: '1rem',
      xl: '1.25rem',
    },
  },
  assets: (t) => {
    return {
      shadow: {
        xs: '0px 2px 4px rgba(134, 134, 134, 0.1)',
        s: '0px 4px 4px rgba(92, 92, 92, 0.1)',
        m: '0px 2px 12px rgba(34, 34, 34, 0.1)',
        l: '0px 12px 12px rgba(96, 96, 96, 0.1)',
        xl: '0px 20px 30px rgba(29, 29, 29, 0.1)',
      },
      innerShadow: {
        xs: 'inset 0px 1px 2px rgba(44, 44, 44, 0.1)',
        s: 'inset 0px 2px 4px -1px rgba(58, 55, 42, 0.15)',
      },
      focus: {
        outline: 'none',
        boxShadow: '',
      },
      typography: {
        header: {
          xl: {
            fontSize: '2.75rem',
            lineHeight: '3.5rem',
          },
          l: {
            fontSize: '2.25rem',
            lineHeight: '3.5rem',
          },
          m: {
            fontSize: '1.875rem',
            lineHeight: '2.5rem',
          },
          s: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
          },
          xs: {
            fontSize: '1.125rem',
            lineHeight: '2rem',
          },
        },
      },
      field: {
        xs: {
          indent: '0.5rem',
          height: '1.5rem',
        },
        s: {
          indent: '0.75rem',
          height: '2rem',
        },
        m: {
          indent: '1rem',
          height: '2.5rem',
        },
        l: {
          indent: '1.25rem',
          height: '3rem',
        },
        xl: {
          indent: '1.5rem',
          height: '3.5rem',
        },
      },
    }
  },
  overrides: (main, assets) => {
    return {
      Flexbox: {
        container: (state) => [
          state.decoration === 'surface' && {
            borderRadius: main.radius.xl,
          },
        ],
      },
      Block: {
        container: (state) => [
          state.decoration === 'surface' && {
            borderRadius: main.radius.xl,
          },
        ],
      },
      Modal: {
        window: (state) => [
          {
            padding: main.spacing.l,
          },
          state.decoration === 'panel' && {
            borderRadius: `${main.radius.xl} ${main.radius.xl} 0 0`,
          },
          state.decoration === 'fullscreen' && {
            padding: main.spacing.m,
          },
        ],
      },
      Button: (props) => ({
        container: [
          {
            fontWeight: 600,
          },
          props.size === 'xl' && {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            // TODO: change text typography
          },
          props.size === 'l' && {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            // TODO: change text typography
          },
          props.shape === 'rounded' && {
            borderRadius: theme.radius.m,
          },
          props.decoration === 'plain' && {
            color: main.color.hard.string(),
            borderColor: main.color.light.string(),
          },
        ],
      }),
      Viewport: {
        container: {
          '& div': {
            border: 'initial',
          },
        },
      },
      Select: (props) => ({
        dropItem: [
          {
            ':hover:not([disabled])': {
              background: main.color.palette.warmShade01.hex(),
              color: main.color.onSurface.hex(),
            },
            fontWeight: 600,
            borderRadius: main.radius.s,
            color: main.color.onSurface.hex(),
          },
          props.size === 'l' && {
            fontSize: '1.125rem',
          },
        ],
        drop: {
          padding: '0.5rem',
        },
        rightChild: {
          '& > span': {
            color: main.color.light.hex(),
          },
        },
        leftChild: {
          '& > span': {
            color: main.color.light.hex(),
          },
        },
        label: [
          {
            color: main.color.palette.hard01.hex(),
            fontWeight: 600,
          },
          props.size === 'l' && {
            ...assets.typography.paragraph.s,
            lineHeight: '1.5rem',
            marginBottom: 0,
            paddingBottom: 0,
          },
        ],
        field: [
          {
            borderRadius: main.radius.m,
            color: main.color.palette.hardest01.hex(),
            fontWeight: 600,
          },
          props.size === 'l' && {
            fontSize: '1.125rem',
          },
        ],
      }),
      ScrollView: {
        yThumb: () => [
          {
            background: main.color.light.hex(),
          },
        ],
        yBar: () => [
          {
            backgroundColor: main.color.backgroundVariant.hex(),
          },
        ],
      },
      Field: {
        field: [
          {
            borderRadius: main.radius.m,
            ':focus, :focus-within': {
              borderColor: main.color.palette.light01.hex(),
            },
          },
        ],
      },
      TextField: {
        label: [
          {
            color: main.color.palette.hard01.hex(),
            fontWeight: 600,
          },
        ],
        container: [
          {
            color: main.color.palette.hardest01.hex(),
            fontWeight: 600,
          },
        ],
      },
      Stepper: {
        step: (state) => [
          { fontSize: '1.125rem', color: main.color.palette.light01.hex() },
          state.size === 'xs' && {
            width: '4.875rem',
          },
          state.active && {
            borderColor: main.color.palette.warmShade02.hex(),
            color: main.color.palette.warmShade03.hex(),
          },
          state.complete && {
            color: theme.color.surface.string(),
            backgroundColor: main.color.palette.warmShade02.hex(),
            borderColor: main.color.palette.warmShade02.hex(),
          },
        ],
      },
      Checkbox: (props) => ({
        check: () => [
          props.size === 'l' && {
            height: '1.5rem',
          },
          props.size === 's' && {
            borderRadius: main.radius.xs,
          },
        ],
      }),
    }
  },
})

export default theme
