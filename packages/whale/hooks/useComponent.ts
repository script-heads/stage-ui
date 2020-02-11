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

    return useMemo(() => {
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
                mouseFocus, 
                focusDecoration 
            } 
        )
        
        const cs = createComponentStyles(
            resolvedStyles, 
            propStyles, 
            overrides
        )
        
        return { cs, attributes, events, focus, theme }

    }, [props, styles, mouseFocus, focusDecoration, theme, params, overrideName])
}

export default useComponent