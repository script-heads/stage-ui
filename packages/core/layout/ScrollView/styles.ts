import callProp from '@flow-ui/core/misc/utils/callProp'
import WhaleTypes from '@flow-ui/whale/types'
import chroma from 'chroma-js'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {

    let color = chroma(
        callProp(props.color, theme.color) || theme.color.onBackground.css()
    )

    return {
        container: [
            {
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
            },
            {
                padding: '0 !important',
                margin: '0 !important',
            }
        ],
        content: [{
            position: 'relative',
            /**
             * causing issue with
             * crop content
             */
            // width: 'fit-content',
            height: 'fit-content',
            minWidth: '100%',
            minHeight: '100%',
            willChange: 'left, top',
        }],
        yBar: (variant) => [
            {
                zIndex: 999,
                position: 'absolute',
                top: 0,
                right: 0,
                width: '0.75rem',
                borderRadius: '5rem',
                backgroundColor: color.alpha(0.1).css(),
                transition: 'opacity 0.5s',
                willChange: 'opacity',
                opacity: 0,
                ':hover': {
                    opacity: 1,
                    '> span': { opacity: 0.4 }
                }
            },
            variant({
                active: [{ opacity: 1 }],
                size: {
                    xs: [{
                        width: '0.25rem',
                    }],
                    s: [{
                        width: '0.5rem',
                    }],
                    l: [{
                        width: '1rem',
                    }],
                    xl: [{
                        width: '1.25rem',
                    }]
                },
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                },
                position: {
                    left: [{
                        right: 'auto',
                        left: 0
                    }]
                }
            })
        ],
        yThumb: (variant) => [
            {
                zIndex: 999,
                display: 'block',
                width: '0.75rem',
                height: '100%',
                borderRadius: '1rem',
                backgroundColor: color.css(),
                opacity: 0,
                transition: 'opacity 0.5s',
                willChange: 'opacity',
            },
            variant({
                active: [{ opacity: 0.4 }],
                size: {
                    xs: [{
                        width: '0.25rem',
                    }],
                    s: [{
                        width: '0.5rem',
                    }],
                    l: [{
                        width: '1rem',
                    }],
                    xl: [{
                        width: '1.25rem',
                    }]
                },
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                }
            })

        ],
        xBar: (variant) => [
            {
                zIndex: 999,
                position: 'absolute',
                left: 0,
                bottom: 0,
                height: '0.5rem',
                width: '100%',
                borderRadius: '1rem',
                backgroundColor: color.alpha(0.1).css(),
                transition: 'opacity 0.5s',
                willChange: 'opacity',
                opacity: 0,
                ':hover': {
                    opacity: 1,
                    '> span': { opacity: 0.4 }
                }
            },
            variant({
                active: [{ opacity: 1 }],
                size: {
                    xs: [{
                        height: '0.25rem',
                    }],
                    s: [{
                        height: '0.5rem',
                    }],
                    l: [{
                        height: '1rem',
                    }],
                    xl: [{
                        height: '1.25rem',
                    }]
                },
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                },
                position: {
                    top: [{
                        bottom: 'auto',
                        top: 0
                    }]
                }
            })
        ],
        xThumb: (variant) => [
            {
                zIndex: 999,
                display: 'block',
                height: '0.5rem',
                width: '100%',
                borderRadius: '1rem',
                backgroundColor: color.css(),
                opacity: 0,
                transition: 'opacity 0.5s',
                willChange: 'opacity',
            },
            variant({
                active: [{ opacity: 0.4 }],
                size: {
                    xs: [{
                        height: '0.25rem',
                    }],
                    s: [{
                        height: '0.5rem',
                    }],
                    l: [{
                        height: '1rem',
                    }],
                    xl: [{
                        height: '1.25rem',
                    }]
                },
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                }
            })
        ],
    }
}

export default styles