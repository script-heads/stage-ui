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
      gray600: Color

      purple50: Color
      purple100: Color
      purple200: Color
      purple300: Color
      purple400: Color
      purple500: Color
      purple600: Color
      purple700: Color
      purple800: Color
      purple900: Color

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
      background: [250, 250, 250], // rgba(250, 250, 250, 1)
      backgroundVariant: [243, 242, 242], // rgba(243, 242, 242, 1)
      onBackground: [41, 30, 15], // rgba(41, 30, 15, 1)
      surface: [255, 255, 255], // rgba(255, 255, 255, 1)
      surfaceVariant: [249, 243, 234], // rgba(249, 243, 234, 1)
      onSurface: [35, 35, 35], // rgba(35, 35, 35, 1)
      primary: [255, 204, 0], // rgba(255, 204, 0, 1)
      onPrimary: [16, 15, 14], // rgba(16, 15, 14, 1)
      secondary: [145, 129, 243], // rgba(145, 129, 243, 1)
      onSecondary: [255, 255, 255], // rgba(255, 255, 255, 1)
      light: [191, 191, 191], // rgba(191, 191, 191, 1)
      lightest: [243, 242, 241], // rgba(243, 242, 241, 1)
      hard: [117, 115, 113], // rgba(117, 115, 113, 1)
      hardest: [66, 63, 61], // rgba(66, 63, 61, 1)
      success: [155, 197, 61], // rgba(155, 197, 61, 1)
      info: [28, 185, 252], // rgba(28, 185, 252, 1)
      warning: [252, 162, 28], // rgba(252, 162, 28, 1)
      error: [255, 90, 95], // rgba(255, 90, 95, 1)

      palette: {
        black: [16, 16, 17], // rgba(16, 16, 17, 1)

        warmShade01: [255, 249, 229], // rgba(255, 249, 229, 1)
        warmShade02: [251, 220, 126], // rgba(251, 220, 126, 1)
        warmShade03: [255, 187, 0], // rgba(255, 187, 0, 1)

        hard01: [107, 114, 128], // rgba(107, 114, 128, 1)
        hard02: [156, 163, 175], // rgba(156, 163, 175, 1)

        hardest01: [55, 65, 81], // rgba(55, 65, 81, 1)

        lightest01: [243, 244, 246], // rgba(243, 244, 246, 1)

        light01: [209, 213, 219], // rgba(209, 213, 219, 1)
        light02: [229, 231, 235], // rgba(229, 231, 235, 1)

        redShade01: [254, 134, 134], // rgba(254, 134, 134, 1)

        grayShade01: [230, 230, 230], // rgba(230, 230, 230, 1)
        gray100: [243, 244, 246], // rgba(243, 244, 246, 1)
        gray200: [229, 231, 235], // rgba(229, 231, 235, 1)
        gray300: [209, 213, 219], // rgba(209, 213, 219, 1)
        gray400: [156, 163, 175], // rgba(156, 163, 175, 1)
        gray500: [107, 114, 128], // rgba(107, 114, 128, 1)
        gray600: [75, 85, 99], // rgba(75, 85, 99, 1)

        orange50: [255, 247, 237], // rgba(255, 247, 237, 1)
        orange100: [255, 237, 213], // rgba(255, 237, 213, 1)
        orange200: [254, 215, 170], // rgba(254, 215, 170, 1)
        orange300: [253, 186, 116], // rgba(253, 186, 116, 1)
        orange400: [251, 146, 60], // rgba(251, 146, 60, 1)
        orange500: [249, 115, 22], // rgba(249, 115, 22, 1)
        orange600: [234, 88, 12], // rgba(234, 88, 12, 1)
        orange700: [194, 65, 12], // rgba(194, 65, 12, 1)
        orange800: [154, 52, 18], // rgba(154, 52, 18, 1)
        orange900: [124, 45, 18], // rgba(124, 45, 18, 1)

        pink300: [249, 168, 212], // rgba(249, 168, 212, 1)
        pink400: [244, 114, 182], // rgba(244, 114, 182, 1)
        pink500: [236, 72, 153], // rgba(236, 72, 153, 1)

        purple50: [245, 243, 255], // rgba(245, 243, 255, 1)
        purple100: [237, 233, 254], // rgba(237, 233, 254, 1)
        purple200: [221, 214, 254], // rgba(221, 214, 254, 1)
        purple300: [196, 181, 253], // rgba(196, 181, 253, 1)
        purple400: [167, 139, 250], // rgba(167, 139, 250, 1)
        purple500: [139, 92, 246], // rgba(139, 92, 246, 1)
        purple600: [124, 58, 237], // rgba(124, 58, 237, 1)
        purple700: [109, 40, 217], // rgba(109, 40, 217, 1)
        purple800: [91, 33, 182], // rgba(91, 33, 182, 1)
        purple900: [76, 29, 149], // rgba(76, 29, 149, 1)

        violetShade01: [195, 185, 234], // rgb(195, 185, 234)
        violetShade02: [137, 118, 214], // rgb(137, 118, 214)
        violetShade03: [78, 53, 177], // rgb(78, 53, 177)

        greenShade01: [222, 251, 208, 0.9], // rgba(222, 251, 208, 1, 0.9)
        greenShade02: [114, 216, 142], // rgba(114, 216, 142, 1)
        greenShade03: [39, 140, 67], // rgba(39, 140, 67, 1)

        polar: [227, 245, 247], // rgba(227, 245, 247, 1)
        chiffon: [240, 253, 203], // rgba(240, 253, 203, 1)
        hawkesBlue: [210, 233, 254], // rgba(210, 233, 254, 1)
        shalimar: [253, 254, 190], // rgba(253, 254, 190, 1)
        champagne: [252, 231, 207], // rgba(252, 231, 207, 1)
        snowyMint: [207, 252, 207], // rgba(207, 252, 207, 1)
        scandal: [200, 254, 251], // rgba(200, 254, 251, 1)
        paleRose: [252, 226, 246], // rgba(252, 226, 246, 1)
        lavender: [233, 226, 254], // rgba(233, 226, 254, 1)
        azalea: [249, 200, 216], // rgba(249, 200, 216, 1)
        cosmos: [255, 209, 209], // rgba(255, 209, 209, 1)
        morningGlory: [148, 217, 224], // rgba(148, 217, 224, 1)
        inchWarm: [173, 231, 9], // rgba(173, 231, 9, 1)
        goldenYellow: [251, 222, 4], // rgba(251, 222, 4, 1)
        texasRose: [245, 173, 87], // rgba(245, 173, 87, 1)
        screamingGreen: [119, 238, 119], // rgba(119, 238, 119, 1)
        babyBlue: [108, 244, 236], // rgba(108, 244, 236, 1)
        paleMagenta: [243, 135, 218], // rgba(243, 135, 218, 1)
        dullLavender: [173, 147, 251], // rgba(173, 147, 251, 1)
        mayaBlue: [105, 182, 252], // rgba(105, 182, 252, 1)
        mauvelous: [242, 140, 173], // rgba(242, 140, 173, 1)
        fadedRed: [255, 122, 122], // rgba(255, 122, 122, 1)
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
  assets: (t) => ({
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
  }),
  overrides: (main, assets) => ({
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
      header: () => ({
        h3: {
          fontWeight: 700,
          fontSize: '1.5rem',
          lineHeight: '2rem',
          marginBottom: '0.5rem',
        },
        p: {
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: '1.5rem',
          color: '#4B5563',
          marginBottom: '1.5rem',
        },
      }),
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
  }),
})

export default theme
