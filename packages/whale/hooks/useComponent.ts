import * as Emotion from '@emotion/core'
import Types, { StyleObject } from '../types'
import attributeProps from '../utils/attributeProps'
import styleProps from '../utils/styleProps'
import useTheme from './useTheme'

const useComponent = <S>(componentNameForOverride: string, options: {
        props, 
        styles: Types.ComponentStyles<S> | StyleObject<S>, 
        mouseFocus?: boolean,
        disableDecoration?: boolean
    }): { css: Types.FlowStyles<S>, attributes, focus } => {
    
    let { props, styles: componentStyles, mouseFocus, disableDecoration } = options
    const theme = useTheme()
    const propStyles = styleProps(props, theme)
    const { attributes, focus } = attributeProps(props, theme, mouseFocus, disableDecoration)
    const css: Types.FlowStyles<S> = {} as Types.FlowStyles<S>

    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme, propStyles)
    }

    const themeOverrides = componentNameForOverride && theme.overrides[componentNameForOverride]

    Object.keys(componentStyles).map(styleName => {
        if (typeof componentStyles[styleName] === 'function') {
            css[styleName] = (state) => {

                const variant = (varaints) => {
                    let variantStyles: Types.EmotionStyles = []
                    
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