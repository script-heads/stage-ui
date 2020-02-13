import WhaleTypes from '../../types'
import createAttributes from './attribute'
import createPropStyles from './style'
import WhalePropsTypes from './types'

interface Options<Styles> {
    styleProps?: Partial<Record<keyof Styles, (keyof WhalePropsTypes.InjectedStyles)[]>>
    mouseFocus?: boolean
}

type SetFocus = React.Dispatch<React.SetStateAction<boolean>>

const attachProps = <Styles, Props>(
    props: Props, 
    theme: WhaleTypes.Theme, 
    setFocus: SetFocus, 
    options: Options<Styles>) => {

    const { attributes, events } = createAttributes<Styles,Props>(
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