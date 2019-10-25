import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import Types from './types'
import Global from '../../types'

const treeStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    const styleProps = useStyleProps(props)

    return {
        container: (variant) => [
            styleProps.all,
            variant({
                decoration: {
                    inline: [{
                        display: 'flex',
                        alignItems: 'flex-start',
                    }]
                },
                needIndent: [{
                    paddingLeft: '1rem'
                }]
            }),
        ],
        label: [
            {
                cursor: 'pointer',
                userSelect: 'none',
            },
            props.alwaysOpen && {
                cursor: 'default',
            }
        ],
        icon: (variant) => [
            {
                display: 'none'
            },
            variant({
                decoration: {
                    drop: [{
                        display: 'inline-block',
                        marginRight: '0.25rem',
                    }]
                },
                disabled: [{
                    cursor: 'not-allowed'
                }]
            }),
        ],
        child: (variant) => [
            variant({
                isOpen: [{
                    display: 'none'
                }]
            })
        ]
    }
}

export default treeStyles