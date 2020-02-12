import WhaleTypes from '../../types'
import createAttributes from './attribute'
import createPropStyles from './style'

interface Options {
    styleProps?: Partial<Record<string, string[]>>
    mouseFocus?: boolean
}

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const attachProps = (props, theme: WhaleTypes.Theme, setFocus: SetFocus, options: Options) => {

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