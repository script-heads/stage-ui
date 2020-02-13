import WhaleTypes from '../types'
import WhalePropsTypes from '../utils/attachProps/types'
import useTheme from './useTheme'
import attachProps from '../utils/attachProps'
import createStyles from '../utils/createStyles'
import { useState, useMemo, CSSProperties } from 'react'

interface Options<Styles,Props> {
    props: Props,
    styles: WhaleTypes.Styles<Styles> | WhaleTypes.CreateStyles<Styles,Props>,
    styleProps?: Partial<Record<keyof Styles, (keyof WhalePropsTypes.InjectedStyles)[]>>
    mouseFocus?: boolean,
    focusDecoration?: boolean,
    theme?: WhaleTypes.Theme
}

const defaultBreakpoints = ['1199.98px','991.98px','767.98px','575.98px']

const useComponent = <Styles,Props>(
    overrideName: string, 
    options: Options<Styles,Props>, 
    params: Object = {}) => {

    const { 
        props,
        styles,
        styleProps,
        mouseFocus,
        focusDecoration,
        theme = useTheme() 
    } = options

    const [focus, setFocus] = useState(false)

    const { cs, attributes, events } = useMemo(() => {
        if (!theme.breakpoints || !theme.breakpoints.length) {
            theme.breakpoints = defaultBreakpoints
        }
        
        const resolvedStyles = typeof styles === 'function'
            ? styles(props, theme, params) 
            : styles

        const { 
            attributes, 
            events, 
            propStyles 
        } = attachProps<Styles,Props>(
            props,
            theme, 
            setFocus,
            {
                styleProps,
                mouseFocus 
            } 
        )
        
        const cs = createStyles(
            resolvedStyles,
            propStyles,
            props, 
            overrideName, 
            theme.overrides
        )
        
        return { cs, attributes, events }

    }, [props, styles, mouseFocus, theme, params, overrideName])

    if (focus && focusDecoration != false) {
        attributes.style = {
            outline: 'none', 
            ...theme.assets.focus, 
            ...attributes.style
        } as CSSProperties
    }

    return {cs, attributes, events, focus, theme}
}

export default useComponent