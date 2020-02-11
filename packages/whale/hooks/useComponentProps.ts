import WhaleTypes from '../types'
import useAttributesProps from '../utils/props/attribute'
import useStylesProps from '../utils/props/style'

interface Options {
    styleProps?: Partial<Record<string, string[]>>
    mouseFocus?: boolean,
    focusDecoration?: boolean,
}

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const useComponentProps = (props, theme: WhaleTypes.Theme, setFocus: SetFocus, options: Options) => {

    const { attributes, events } = useAttributesProps(
        props,
        theme,
        setFocus,
        options.mouseFocus,
        options.focusDecoration
    )

    let propStyles = {}

    if (options.styleProps) {
        propStyles = useStylesProps(props, theme, options.styleProps)
    }

    return { attributes, events, propStyles }
}

export default useComponentProps