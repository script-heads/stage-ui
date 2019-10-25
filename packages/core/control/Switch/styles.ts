import Types from './types'
import Global from '../../types'
import checkStyles from '@flow-ui/core/misc/hocs/Check/styles'

const switchStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {

    return {
        ...checkStyles(props, theme),
        check: (variant) => [
            {
                transition: 'all 0.2s',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.color.lightest.css(),
            },
            variant({
                size:{
                    xsmall: [{
                        width: '1.125rem',
                        height: '0.25rem',
                        borderRadius: '0.75rem',
                    }],
                    small: [{
                        width: '1.5rem',
                        height: '0.5rem',
                        borderRadius: '1rem',
                    }],
                    medium: [{
                        width: '1.825rem',
                        height: '0.625rem',
                        borderRadius: '1.25rem',
                    }],
                    large: [{
                        width: '2.25rem',
                        height: '0.75rem',
                        borderRadius: '1.5rem',
                    }],
                    xlarge: [{
                        width: '3rem',
                        height: '1rem',
                        borderRadius: '2rem',
                    }],
                },
                checked: [{
                    backgroundColor: theme.color.primary.css()
                }],
                animated: [{
                    transition: 'all .15s'
                }]
            }),
            variant({
                disabled: [{
                    backgroundColor: theme.color.lightest.css()
                }]
            }) 
        ],
        switch: (variant) => [
            {
                transition: 'all 0.2s',
                position: 'relative',
                boxSizing: 'border-box',
                borderRadius: '50%',
                borderStyle: 'solid',
                borderColor: theme.color.primary.css(),
                background: theme.color.surface.css(),
                boxShadow: theme.assets.shadow.default,
            },
            variant({
                size:{
                    xsmall: [
                        {
                            borderWidth: '0.1rem',
                            width: '0.75rem',
                            height: '0.75rem',
                            left: '-0.1875rem'
                        },
                        variant({
                            checked: [{
                                left: '0.1875rem'
                            }]
                        })
                    ],
                    small: [
                        {
                            borderWidth: '0.1rem',
                            width: '1rem',
                            height: '1rem',
                            left: '-0.25rem',

                        },
                        variant({
                            checked: [{
                                left: '0.25rem'
                            }]
                        })
                    ],
                    medium: [
                        {
                            borderWidth: '0.125rem',
                            width: '1.25rem',
                            height: '1.25rem',
                            left: '-0.3125rem',
                        },
                        variant({
                            checked: [{
                                left: '0.3125rem'
                            }]
                        })
                    ],
                    large: [
                        {
                            borderWidth: '0.175rem',
                            width: '1.5rem',
                            height: '1.5rem',
                            left: '-0.375rem',
                        },
                        variant({
                            checked: [{
                                left: '0.375rem'
                            }]
                        })
                    ],
                    xlarge: [
                        {
                            borderWidth: '0.25rem',
                            width: '2rem',
                            height: '2rem',
                            left: '-0.5rem',
                        },
                        variant({
                            checked: [{
                                left: '0.5rem'
                            }]
                        })
                    ]
                },
                disabled: [{
                    borderColor: theme.color.lightest.css()
                }],
                animated: [{
                    transition: 'all .15s'
                }]
            }),
        ]
    }
}

export default switchStyles