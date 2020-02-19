import WhaleTypes from '../../types'
import { Options } from '../../hooks/useComponent'
import createAttributes from './attribute'
import createPropStyles from './style'
import WhalePropsTypes from './types'

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const attachProps = <Styles, Props>(
    props: Props, 
    theme: WhaleTypes.Theme, 
    setFocus: SetFocus, 
    options: Options<Styles, Props>) => {

    const { attributes, events } = createAttributes<Styles,Props>(
        props,
        setFocus,
        options
    )

    let propStyles = {}

    if (options.styleProps) {
        propStyles = createPropStyles(props, theme, options.styleProps)
    }

    return { attributes, events, propStyles }
}

export default attachProps