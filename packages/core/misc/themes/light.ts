import Theme from './types'
import createTheme from '../utils/createTheme'

const variables: Theme.Variables = {
    name: 'Light',
    color: {
        background: [250, 250, 250],
        backgroundVariant: [240, 240, 240],
        surface: [255, 255, 255],
        surfaceVariant: [230, 230, 230],
        primary: [74, 139, 252],
        secondary: [252, 148, 74],

        onBackground: [0, 0, 0],
        onSurface: [0, 0, 0],
        onPrimary: [255, 255, 255],
        onSecondary: [255, 255, 255],

        lightest: [230, 230, 230],
        light: [150, 150, 150],
        hard: [120, 120, 120],
        hardest: [100, 100, 100],

        accent: {
            red: [188, 0, 0],
            green: [0, 200, 0],
            blue: [0, 122, 255],
            orange: [255, 149, 0]
        }
    },
    radius: {
        default: '0.5rem',
        narrow: '0.25rem',
        wide: '1rem',
    },
    distance: {
        xsmall: '.25rem',
        small: '.5rem',
        medium: '1rem',
        large: '2rem',
        xlarge: '4rem',
    },
    typography: {
        paragraph: {
            1: {
                fontSize: '1rem',
                lineHeight: '1.5rem'
            },
            2: {
                fontSize: '0.875rem',
                lineHeight: '1.25rem'
            },
            3: {
                fontSize: '0.75rem',
                lineHeight: '1rem'
            },
            4: {
                fontSize: '0.625rem',
                lineHeight: '0.75rem'
            }
        },
        text: {
            1: {
                fontSize: '1rem',
                lineHeight: '1.25rem'
            },
            2: {
                fontSize: '0.875rem',
                lineHeight: '1rem'
            },
            3: {
                fontSize: '0.75rem',
                lineHeight: '0.875rem'
            },
            4: {
                fontSize: '0.625rem',
                lineHeight: '0.75rem'
            }
        },
        header: {
            1: {
                fontSize: '2rem',
                lineHeight: '3rem',
            },
            2: {
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
            3: {
                fontSize: '1.25rem',
                lineHeight: '1.5rem',
            },
            4: {
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
            }
        },
        display: {
            1: {
                fontSize: '6rem',
                lineHeight: 1.5,
            },
            2: {
                fontSize: '5.5rem',
                lineHeight: 1.5,
            },
            3: {
                fontSize: '4.5rem',
                lineHeight: 1.5,
            },
            4: {
                fontSize: '3.5rem',
                lineHeight: 1.5,
            }
        }
    }
}

const assets = (variables): Theme.Assets => ({
    border: {
        width: '1px',
        style: 'solid',
        color: variables.color.lightest.css()
    },
    shadow: {
        default: `0px 4px 8px rgba(0,0,0,0.15)`,
        short: `0px 2px 4px rgba(0,0,0,0.15)`,
        long: `0 16px 16px rgba(0,0,0,0.15)`,
    },
    gradient: {
        linear: `0deg, ${variables.color.primary.css()} 0%, ${variables.color.secondary.css()} 100%`,
        linearVariant: `0deg, ${variables.color.secondary.css()} 0%, ${variables.color.primary.css()} 100%`,
        radial: `circle, ${variables.color.primary.css()} 0%, ${variables.color.secondary.css()} 100%`,
        radialVariant: `circle, ${variables.color.secondary.css()} 0%, ${variables.color.primary.css()} 100%`,
    },
    focus: {
        boxShadow: '0 0 0 3px ' + variables.color.primary.alpha(.3).css()
    },
    fieldHeight: {
        xsmall: '1.5rem',
        small: '2rem',
        medium: '2.5rem',
        large: '3rem',
        xlarge: '3.5rem',
    }
})

const overrides: Theme.Overrides = {

}

export default createTheme(variables, assets, overrides) as Theme.Index