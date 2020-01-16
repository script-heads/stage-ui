import Types from '../types'
import { css } from '@emotion/core'
import useTheme from './useTheme'
import styleProps from '../utils/styleProps'
import attributeProps from '../utils/attributeProps'

const useComponent = <S>(options: {
        props, 
        styles: Types.ComponentStyles<S> | Types.FunctionalComponentStyles<S>, 
        name?: keyof Types.Overrides,
        mouseFocus?: boolean,
        disableDecoration?: boolean
    }): { styles: Types.FlowStyles<S>, attributes } => {
    
    let { props, styles: componentStyles, name, mouseFocus, disableDecoration } = options
    const { theme } = useTheme()
    const propStyles = styleProps(props, theme)
    const attributes = attributeProps(props, theme, mouseFocus, disableDecoration)
    const styles: Types.FlowStyles<S> = {} as Types.FlowStyles<S>

    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme, propStyles)
    }

    const themeOverrides = name && theme.overrides[name]

    Object.keys(componentStyles).map(styleName => {
        if (typeof componentStyles[styleName] === 'function') {
            styles[styleName] = (state) => {

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
                
                return css(
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
            styles[styleName] = css(
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
    
    return { styles, attributes }
}

export default useComponent