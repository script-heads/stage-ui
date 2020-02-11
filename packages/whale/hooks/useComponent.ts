import WhaleTypes from '../types'
import { InjectedStyles } from '../utils/props/style/types'
import useTheme from './useTheme'
import useComponentProps from './useComponentProps'
import createComponentStyles from '../utils/createComponentStyles'
import { useState, useMemo } from 'react'

interface Options<S> {
    props,
    styles: WhaleTypes.Styles<S> | WhaleTypes.CreateStyles<S>,
    styleProps?: Partial<Record<keyof S, (keyof InjectedStyles)[]>>
    mouseFocus?: boolean,
    focusDecoration?: boolean,
    theme?: WhaleTypes.Theme
}
const defaultBreakpoints = ['576px','768px','992px','1200px']

const useComponent = <S>(overrideName: string, options: Options<S>, params: Object = {}) => {
    
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

        const overrides = theme.overrides?.[overrideName]

        const { 
            attributes, 
            events, 
            propStyles 
        } = useComponentProps(
            props,
            theme, 
            setFocus,
            {
                styleProps,
                mouseFocus 
            } 
        )
        
        const cs = createComponentStyles(
            resolvedStyles, 
            propStyles, 
            overrides
        )
        
        return { cs, attributes, events }

    }, [props, styles, mouseFocus, theme, params, overrideName])

    if (focus && focusDecoration != false) {
        attributes.style = {
            outline: 'none', 
            ...theme.assets.focus, 
            ...attributes.style
        }
    }

    return {cs, attributes, events, focus, theme}
}

export default useComponent