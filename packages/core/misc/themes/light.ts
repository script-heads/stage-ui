import WhaleTypes from '@flow-ui/whale/types'
import { createTheme } from '@flow-ui/whale'

const Light: WhaleTypes.SourceTheme = {
    main: {
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

            error: [188, 0, 0],
            successful: [0, 200, 0],
            warning: [255, 149, 0]
            
        },
        radius: {
            default: '0.5rem',
            narrow: '0.25rem',
            wide: '1rem',
        },
        spacing: {
            xs: '.25rem',
            s: '.5rem',
            m: '1rem',
            l: '2rem',
            xl: '4rem',
        },
        typography: {
            display: {
                xl: {
                    fontSize: '8rem',
                    lineHeight: 1.5,
                },
                l: {
                    fontSize: '6rem',
                    lineHeight: 1.5,
                },
                m: {
                    fontSize: '5.5rem',
                    lineHeight: 1.5,
                },
                s: {
                    fontSize: '4.5rem',
                    lineHeight: 1.5,
                },
                xs: {
                    fontSize: '3.5rem',
                    lineHeight: 1.5,
                }
            },
            header: {
                xl: {
                    fontSize: '2.75rem',
                    lineHeight: '3.75rem',
                },
                l: {
                    fontSize: '2rem',
                    lineHeight: '3rem',
                },
                m: {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                },
                s: {
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem',
                },
                xs: {
                    fontSize: '1.125rem',
                    lineHeight: '1.5rem',
                }
            },
            paragraph: {
                xl: {
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem'
                },
                l: {
                    fontSize: '1rem',
                    lineHeight: '1.5rem'
                },
                m: {
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem'
                },
                s: {
                    fontSize: '0.75rem',
                    lineHeight: '1rem'
                },
                xs: {
                    fontSize: '0.625rem',
                    lineHeight: '0.75rem'
                }
            },
            text: {
                xl: {
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem'
                },
                l: {
                    fontSize: '1rem',
                    lineHeight: '1.25rem'
                },
                m: {
                    fontSize: '0.875rem',
                    lineHeight: '1rem'
                },
                s: {
                    fontSize: '0.75rem',
                    lineHeight: '0.875rem'
                },
                xs: {
                    fontSize: '0.625rem',
                    lineHeight: '0.75rem'
                }
            },
        }
    },
    assets: (theme) => ({
        border: {
            width: '1px',
            style: 'solid',
            color: theme.color.lightest.css()
        },
        shadow: {
            default: `0px 4px 8px rgba(0,0,0,0.15)`,
            short: `0px 2px 4px rgba(0,0,0,0.15)`,
            long: `0 16px 16px rgba(0,0,0,0.15)`,
        },
        focus: {
            boxShadow: '0 0 0 3px ' + theme.color.primary.alpha(.3).css()
        },
        fieldHeight: {
            xs: '1.5rem',
            s: '2rem',
            m: '2.5rem',
            l: '3rem',
            xl: '3.5rem',
        }
    }),
    overrides: {}
}

export default createTheme(Light)