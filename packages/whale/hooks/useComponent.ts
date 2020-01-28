import { css } from '@emotion/core'
import WhaleTypes, { EmotionStyles } from '../types'
import attributeProps from '../utils/attributeProps'
import styleProps from '../utils/styleProps'
import useTheme from './useTheme'

interface Options<S> {
    props, 
    styles: WhaleTypes.Styles<S> | WhaleTypes.CreateStyles<S>, 
    mouseFocus?: boolean,
    focusDecoration?: boolean
}

const useComponent = <S>(overrideName: string, options: Options<S>) => {
    
    const { props, mouseFocus, focusDecoration } = options
    const cs: WhaleTypes.ComponentStyles<S> = {} as WhaleTypes.ComponentStyles<S>

    const theme = useTheme()
    const { attributes, events, focus } = attributeProps(props, theme, mouseFocus, focusDecoration)
    
    const propStyles = styleProps(props, theme)

    const styles = typeof options.styles === 'function'
        ? options.styles(props, theme, propStyles)
        : options.styles

    const themeOverrides = overrideName && theme.overrides[overrideName]

    Object.keys(styles).map(styleName => {
        if (typeof styles[styleName] === 'function') {
            cs[styleName] = (state) => {

                const variant = (varaints) => {
                    let variantStyles: EmotionStyles = []
                    
                    for (const variantName of Object.keys(varaints)) {
                        const variantValue = state[variantName]
        
                        if (typeof variantValue === 'string') {
                            variantStyles.push(varaints[variantName][variantValue])
                        }
                        
                        if (typeof variantValue === 'boolean' && variantValue === true) {
                            variantStyles.push(varaints[variantName])
                        }

                        if (!Object.keys(state).includes(variantName)) {
                            console.warn(
                                `Can't find value of "${variantName}" variant in "${styleName}" style. 
                                Function has been called with:`, 
                                state
                            )
                        }
                    }
                    return variantStyles
                }
                
                return css(
                    styles[styleName](variant), 
                    
                    themeOverrides &&
                    themeOverrides[styleName] && 
                    themeOverrides[styleName](variant),
                    
                    props.styles && 
                    props.styles[styleName] && 
                    props.styles[styleName](variant)
                )
            }
        } else {
            cs[styleName] = css(
                styles[styleName], 
                
                themeOverrides &&
                themeOverrides[styleName] && 
                themeOverrides[styleName],
                
                props.styles && 
                props.styles[styleName] && 
                props.styles[styleName]
            )
        }     
    })
    
    return { cs, attributes, events, focus }
}

export default useComponent