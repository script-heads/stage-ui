import * as Emotion from '@emotion/core'
import WhaleTypes, {EmotionStyles} from '../types'
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

    let { props, styles: componentStyles, mouseFocus, focusDecoration } = options
    const css: WhaleTypes.ComponentStyles<S> = {} as WhaleTypes.ComponentStyles<S>

    const theme = useTheme()
    const propStyles = styleProps(props, theme)
    const { attributes, focus } = attributeProps(props, theme, mouseFocus, focusDecoration)
    
    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme, propStyles)
    }

    const themeOverrides = overrideName && theme.overrides[overrideName]

    Object.keys(componentStyles).map(styleName => {
        if (typeof componentStyles[styleName] === 'function') {
            css[styleName] = (state) => {

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
                
                return Emotion.css(
                    componentStyles[styleName](variant), 
                    
                    themeOverrides &&
                    themeOverrides[styleName] && 
                    themeOverrides[styleName](variant),
                    
                    props.overrides && 
                    props.overrides[styleName] && 
                    props.overrides[styleName](variant)
                )
            }
        } else {
            css[styleName] = Emotion.css(
                componentStyles[styleName], 
                
                themeOverrides &&
                themeOverrides[styleName] && 
                themeOverrides[styleName],
                
                props.overrides && 
                props.overrides[styleName] && 
                props.overrides[styleName]
            )
        }     
    })
    
    return { css, attributes, focus }
}

export default useComponent