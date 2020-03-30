import { Options } from '../../hooks/useComponent'
import SystemTypes from '../../types'
import createAttributes from './attribute'
import createPropStyles from './style'

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const attachProps = <Styles, Props>(
    props: Props,
    theme: SystemTypes.Theme,
    setFocus: SetFocus,
    options: Options<Styles, Props>) => {

    const { attributes, events } = createAttributes<Styles, Props>(
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