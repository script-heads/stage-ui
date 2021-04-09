import SystemTypes from '@stage-ui/system/types'
import createTheme from '@stage-ui/system/utils/createTheme'

const Light: SystemTypes.SourceTheme = {
    main: {
        name: 'Light',
        color: {
            background: [245, 245, 245],
            backgroundVariant: [235, 235, 235],
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

            error: [224, 32, 32],
            success: [109, 212, 0],
            warning: [250, 100, 0],
            info: [0, 145, 255]
        },
        radius: {
            xs: '0.125rem',
            s: '0.25rem',
            m: '0.5rem',
            l: '0.75rem',
            xl: '1rem',
        },
        spacing: {
            xs: '.25rem',
            s: '.5rem',
            m: '1rem',
            l: '1.5rem',
            xl: '1.75rem',
        }
    },
    assets: (theme) => ({
        border: {
            width: '1px',
            style: 'solid',
            color: theme.color.lightest.rgb().string()
        },
        shadow: {
            default: `0px 4px 8px rgba(0,0,0,0.15)`,
            short: `0px 2px 4px rgba(0,0,0,0.15)`,
            long: `0 16px 16px rgba(0,0,0,0.15)`,
        },
        focus: {
            outline: 'none',
            boxShadow: '0 0 0 3px ' + theme.color.primary.alpha(.3).rgb().string(),
        },
        typography: {
            header: {
                xl: {
                    fontSize: '2.5rem',
                    lineHeight: '3.5rem',
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
                    fontSize: '1.5rem',
                    lineHeight: '1.75rem'
                },
                l: {
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem'
                },
                m: {
                    fontSize: '1rem',
                    lineHeight: '1.5rem'
                },
                s: {
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem'
                },
                xs: {
                    fontSize: '0.75rem',
                    lineHeight: '1rem'
                },
            },
            text: {
                xl: {
                    fontSize: '1.5rem',
                    lineHeight: '1.75rem'
                },
                l: {
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem'
                },
                m: {
                    fontSize: '1rem',
                    lineHeight: '1.25rem'
                },
                s: {
                    fontSize: '0.875rem',
                    lineHeight: '1rem'
                },
                xs: {
                    fontSize: '0.75rem',
                    lineHeight: '0.875rem'
                }
            },
        },
        field: {
            xs: {
                padding: '0 0.25rem',
                minHeight: '1.5rem',
            },
            s: {
                padding: '0 0.5rem',
                minHeight: '2rem',
            },
            m: {
                padding: '0 0.75rem',
                minHeight: '2.5rem',
            },
            l: {
                padding: '0 1rem',
                minHeight: '3rem',
            },
            xl: {
                padding: '0 1.25rem',
                minHeight: '3.5rem',
            },
        }
    })
}

export default createTheme(Light)