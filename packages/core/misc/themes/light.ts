import Theme from './types';
import createTheme from '../utils/createTheme';
import chroma from 'chroma-js';
import typography from '../typography';

const variables: Theme.Variables<chroma.Color> = {
    name: 'Light',
    color: {
        background: chroma(250, 250, 250),
        backgroundVariant: chroma(240, 240, 240),
        surface: chroma(255, 255, 255),
        surfaceVariant: chroma(230, 230, 230),
        primary: chroma(74, 139, 252),
        secondary: chroma(252, 148, 74),

        onBackground: chroma(0, 0, 0),
        onSurface: chroma(0, 0, 0),
        onPrimary: chroma(255, 255, 255),
        onSecondary: chroma(255, 255, 255),

        lightest: chroma(230, 230, 230),
        light: chroma(150, 150, 150),
        hard: chroma(120, 120, 120),
        hardest: chroma(100, 100, 100),

        accent: {
            red: chroma(188, 0, 0),
            green: chroma(0, 74, 0),
            blue: chroma(0, 122, 255),
            orange: chroma(255, 149, 0)
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
    typography
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

const components = {
    block: {
        items: {
            container: [{
                // background: 'green'
            }]
        },
        variants: {
            surface: {
                major: {
                    container: [{
                        // background: 'red'
                    }]
                }
            }
        }
    }
}

export default createTheme(variables, assets, components) as Theme.Index