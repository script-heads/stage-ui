import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps> = (props, theme) => {
    
    return {
        container: (variant) => [
            variant({
                decoration: {
                    finder: {
                        '>div:nth-of-type(even)': {
                            background: theme.color.background.rgb().string()
                        }
                    }
                },
            }),
        ],
        row: (variant) => [
            variant({
                decoration: {
                    finder: [
                        {
                            padding: `calc(${theme.spacing.m} / 2)`
                        },
                        variant({
                            size: {
                                xs:{
                                    padding: `calc(${theme.spacing.xs} / 2)`,
                                },
                                s: {
                                    padding: `calc(${theme.spacing.s} / 2)`,
                                },
                                l: {
                                    padding: `calc(${theme.spacing.l} / 2)`,
                                },
                                xl:{
                                    padding: `calc(${theme.spacing.xl} / 2)`,
                                }
                            }
                        })
                    ]
                }
            })
        ],

        label: (variant) => [
            {
                cursor: 'pointer',
                userSelect: 'none',
                flex: 1,
            },
            variant({
                decoration: {
                    finder: {
                        fontWeight: 500
                    }
                }
            })
        ],
        
        arrow: (variant) => [
            {
                opacity: 0,
                cursor: 'pointer',
                height: 'auto',
                color: theme.color.light.rgb().string(),
                fontSize: theme.assets.typography.text.m.fontSize,
                paddingRight: `calc(${theme.spacing.m} / 2)`,
                paddingLeft: `calc(${theme.assets.typography.text.m.fontSize} * ${props.lvl * 1})`,
            },
            variant({
                hasChilds: {
                    opacity: 1,
                },
                size: {
                    xs:{
                        fontSize: theme.assets.typography.text.xs.fontSize,
                        paddingRight: `calc(${theme.spacing.xs} / 2)`,
                        paddingLeft: `calc(${theme.assets.typography.text.xs.fontSize} * ${props.lvl * 1})`,
                    },
                    s: {
                        fontSize: theme.assets.typography.text.s.fontSize,
                        paddingRight: `calc(${theme.spacing.s} / 2)`,
                        paddingLeft: `calc(${theme.assets.typography.text.s.fontSize} * ${props.lvl * 1})`,

                    },
                    l: {
                        fontSize: theme.assets.typography.text.l.fontSize,
                        paddingRight: `calc(${theme.spacing.l} / 2)`,
                        paddingLeft: `calc(${theme.assets.typography.text.l.fontSize} * ${props.lvl * 1})`,

                    },
                    xl:{
                        fontSize: theme.assets.typography.text.xl.fontSize,
                        paddingRight: `calc(${theme.spacing.xl} / 2)`,
                        paddingLeft: `calc(${theme.assets.typography.text.xl.fontSize} * ${props.lvl * 1})`,

                    }
                }
            }),
        ],
        child: (variant) => [
            {
                display: 'none'
            },
            variant({
                isOpen: [{
                    display: 'block'
                }]
            })
        ]
    }
}

export default styles