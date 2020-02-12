import WhaleTypes from '../../types'
import createAttributes from './attribute'
import createPropStyles from './style'

interface Options<StyleProps> {
    styleProps?: StyleProps
    mouseFocus?: boolean
}

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const attachProps = <Props, StyleProps>(
    props: Props, 
    theme: WhaleTypes.Theme, 
    setFocus: SetFocus, 
    options: Options<StyleProps>) => {

    const { attributes, events } = createAttributes(
        props,
        setFocus,
        options.mouseFocus
    )

    let propStyles = {}

    if (options.styleProps) {
        propStyles = createPropStyles(props, theme, options.styleProps)
    }

    return { attributes, events, propStyles }
}

export default attachProps